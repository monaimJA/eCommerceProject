import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './../../../products/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.css']
})
export class ProductsAdminComponent implements OnInit {
  categories:any;
  products:any;
  base64:any;
  form!:FormGroup
  product:any;

  constructor(private ProdSer:ProductsService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.builder.group(
      {
        title: ['',Validators.required],
        price: ['',Validators.required],
        description: ['',Validators.required],
        image: ['',Validators.required],
        category: ['',Validators.required]
      }
    )
    this.ProdSer.getAllProducts().subscribe(
      resp=>{
        this.products=resp;
      }
    )
      this.getCategories();
  }
  getCategories(){
    this.ProdSer.getAllCategories().subscribe(resp=>{
      this.categories=resp;
    })
  }
  getImagePath(event:any){
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.base64=reader.result;
         this.form.get('image')?.setValue(this.base64);
      };


  }
  selectedCategorie(event:any){

    this.form.get('category')?.setValue(event.target.value);
  }
  addProduct(){
    const Model=this.form.value;
    this.ProdSer.addProduct(Model).subscribe(resp=>{
      alert("the product was added succefully");
    })
  }
  update(item:any){
    // this.form.get('title')?.setValue(item.title);
    // this.form.get('price')?.setValue(item.price);
    // this.form.get('description')?.setValue(item.description);
    // this.form.get('image')?.setValue(item.image);
    // this.form.get('category')?.setValue(item.category);
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category
    })
    this.base64=item.image;
  }

}
