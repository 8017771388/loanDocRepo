import { Component, Renderer2, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { DxDataGridComponent , DxSelectBoxModule, DxListModule } from "devextreme-angular";
import { DocumentCenterService } from '../../services/document-center.service';
import CustomStore from 'devextreme/data/custom_store';
import { UserInfo } from "../../../_shared/services/userInfo.service";
import { all } from 'q';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: false } }]
})
export class DocumentListComponent implements OnInit {

  constructor(public renderer : Renderer2,public DocumentCenterService : DocumentCenterService ,private userInfo : UserInfo) { }
  @ViewChild('dropdownList', { static: false }) dropdown: ElementRef;
  @ViewChild("gridContainer")
  gridContainer: DxDataGridComponent;
  public documentData: any = [];
  public dataSource: any = {};
  public pageSize: any = 25;
  public pageNumber: any = 1;
  public totalCount: any;
  public allowedPages = []; 
  public createdByList : any = [];
  public selectedCreatedByList : any = [];
  public filters = [];
  public notSelected : boolean = false;
  public maxError: boolean = false;
  public filterItem: any = [
    {name:'VAUM'},
    {name:'Created By'},
    
  ];
  public isFlag: any= false;
  public currentUser: any;
  selectAllModeVlaue = 'page';
  selectionModeValue = 'all';
  ngOnInit() {
    this.currentUser = this.userInfo.getUserName()
    // let param = {
    //   username: this.userInfo.getUserName(),
    //   isAdmin: ((this.userInfo.getUserRole() == 'Admin')? true :false),
    //   pageSize: this.pageSize,
    //   pageNumber: 1
    // }
    // this.DocumentCenterService.getOfferDocument(param).subscribe(res => {
    //   console.log(res)
    //   //this.dataSource = res["data"];
    // })
    let loadOptions
    let param = {
      username: this.currentUser,
      isAdmin: ((this.userInfo.getUserRole() == 'Admin')? true :false)
    }
    this.DocumentCenterService.getCreatedByList(param).subscribe(res => {
      if(res["isSuccesful"] == true){
        this.createdByList  = res["data"];

      }
    })
    this.initializeDocumentGrid();
  }
  filterBlock(field){
    this.isFlag =true;
    if(this.filters.filter(ele =>ele == field).length <= 0){
      field['showFilterBox'] = true;
      this.filters.push(field)    
    }
    
    this.renderer.removeClass(this.dropdown.nativeElement, 'show');
    
}
  openFilter(){
    if(this.dropdown != undefined){
        this.renderer.addClass(this.dropdown.nativeElement, 'show'); 
    }
    
}
removeClass(){
  this.renderer.removeClass(this.dropdown.nativeElement,'show');
}

getPageNumber(loadOptions) {
  console.log("loadOptions--",loadOptions);
  let pageNumber =
      loadOptions.skip === 0
          ? 1
          : (loadOptions.skip + loadOptions.take) / loadOptions.take;
  if (isNaN(pageNumber)) pageNumber = 1;
  
  return pageNumber;
}
onContentReady(e){       
  console.log(e.component)
  setTimeout(() => {
      if (e.component.pageSize() == 0) {
        var el = e.component._$element.find('.dx-page-size').last();
        el.addClass("dx-selection")
      }
     
  }, 0);

  // console.log(this.gridContainer.instance)
  // console.log(this.gridContainer.instance.getDataSource())
   
}

checkPageSize(e){
  // console.log(e)
   if(e.fullName == 'paging.pageSize'){
       if(isNaN(e.value) == false){
         this.pageSize = e.value;
         this.gridContainer.instance.refresh();
       }
       else{
           this.pageSize = 0;
           e.component.pageSize(0); 
           e.element.find(".dx-page-size:last-child").addClass("dx-selection");
           this.gridContainer.instance.refresh();
       }
     
    
   }
}

initializeDocumentGrid(){
  console.log("hiiiiiiiii");

  this.dataSource.store = new CustomStore({
    key:"id",
    load: (loadOptions:any)=>{
      console.log("loadOptions",loadOptions);
      let param = this.generateParameter(loadOptions);
      return new Promise((resolve) => {
          this.DocumentCenterService.getOfferDocument(param).subscribe((result) => {
            if(result && result["isSuccesful"]){
              let data = result["data"];
              console.log("data----",data);
              this.totalCount = data.length > 0 ? data[0]["totalCount"] : 0

              this.documentData = data;
              if(this.totalCount > 25 && this.totalCount <= 50){
                this.allowedPages = [25,50]
            } 
            else if(this.totalCount > 50 && this.totalCount <= 75){
                this.allowedPages = [25,50,75]
            } 
            else if(this.totalCount > 75 && this.totalCount <= 100){
                this.allowedPages = [25,50,75]
            }
            else if(this.totalCount > 100){
                this.allowedPages = [25,50,75,100,'All'];
            }                     
            resolve({
                data: data,
                totalCount:this.totalCount
                //totalCount: data["totalCount"],
            });
        } else {
            console.log("error");
        }
              
            
              
             
          });
      });
    }
  });
}

showFilterBox(filter){
  
  if(filter.filterApplied == undefined){
      this.filters = this.filters.filter(ele => ele.name != filter.name);
  }
  
}
removeFilter(filter){
  this.filters = this.filters.filter(ele => ele.name != filter.name);
}

onSelectionChanged(e){
  console.log(e)
  if(e.addedItems.length > 0){
      if(this.selectedCreatedByList.filter(el => el == e.addedItems[0]).length <= 0 ){
          this.selectedCreatedByList.push(e.addedItems[0])
      }
  }
  else if(e.removedItems.length > 0){
      this.selectedCreatedByList = this.selectedCreatedByList.filter(ele => ele != e.removedItems[0]);
  }
  console.log(this.selectedCreatedByList)
}



generateParameter(loadOptions){
  let param = {
    username: this.currentUser,
    isAdmin: ((this.userInfo.getUserRole() == 'Admin')? true :false),
    pageSize: this.pageSize,
    pageNumber: this.getPageNumber(loadOptions)
  }
  console.log('param',param);
  return param;
}

applyFilter(filter){
  let filteredData = [];
    const dataSource = this.gridContainer.instance.getDataSource();
    
    
    this.notSelected = false;
    if(filter.name == 'Created By'){
      if(this.selectedCreatedByList.length <= 0){
          this.notSelected = true
      }
      else{
          let filterArr = [];
          let arrayFilter = [];
          let filterSelected = [];
          this.selectedCreatedByList.forEach(element => {
              arrayFilter.push(element.createdBy);
              filterSelected.push(element.createdBy)
          });
          if( arrayFilter.length > 1){
              arrayFilter = arrayFilter.join("/or/").split("/");
          }
          console.log(arrayFilter)
          arrayFilter.forEach(element => {
              if(element != 'or'){
                  var el = ['createdBy','=',element]
                  filterArr.push(el)
              }
              else{
                  filterArr.push(element);
              }
              
              
          });
          
          filter.filterExp = filterSelected.length + " " + 'Selected';
          filter.filterApplied = [filterArr];
          
          filter.showFilterBox = false;
          console.log(filterArr)
      }
      
  }
  if(this.maxError == false || this.notSelected == false){
    if(this.filters.length == 1){
        dataSource.filter(filter.filterApplied);
        dataSource.load()
    }
    else{
        let allfilters = [];
        this.filters.forEach((e,i) => {            
            allfilters.push(e.filterApplied)
        })

       allfilters.forEach((el,i)=>{
           if(i==1){
               allfilters.splice(i,0,'and')
           }
       })
       
       console.log(allfilters)
       dataSource.filter([allfilters]);
        dataSource.load()
        
    }
}
}
cancelFilter(field){
  field.filter = ""
    
    this.notSelected = false;
    
    
    if(field.filterApplied != undefined){
        field.showFilterBox = false;
    }else{
      if( field.name == 'Created By'){
        this.selectedCreatedByList = [];
        field.filterExp = ''
        
    }
    this.filters = this.filters.filter(ele => ele.name != field.name);
    }
}


}
