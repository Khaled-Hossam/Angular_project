import { Injectable } from '@angular/core';
import { Product } from '../models/ProductModel';

@Injectable({
providedIn: 'root'
})
export class ProductService {

constructor() { }

findAll(): Product[] {
return this.products;
}

find(id: string): Product {
return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].ProductId == id) {
            return i;
        }
    }
    return -1;
}


private products: Product[] = [
    {
        "ProductId": "HT-1000",
        "Category": "Laptops",
        "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
        "Name": "Notebook Basic 15",
        "Price": 956,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
        "Status": "Available",
        "Quantity": 10,
    },
    {
        "ProductId": "HT-1010",
        "Category": "Laptops",
        "Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
        "Name": "Notebook Professional 15",
        "Price": 1999,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
        "Status": "Available",
        "Quantity": 16,
    },
    {
        "ProductId": "HT-1030",
        "Category": "Flat Screen Monitors",
        "Description": "Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm",
        "Name": "Ergo Screen E-I",
        "Price": 230,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1030.jpg",
        "Status": "Available",
        "Quantity": 14,
    },
    {
        "ProductId": "HT-1035",
        "Category": "Flat Screen Monitors",
        "Description": "Optimum Hi-Resolution max. 1600 x 1200 @ 85Hz, Dot Pitch: 0.24mm",
        "Name": "Flat Basic",
        "Price": 399,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1035.jpg",
        "Status": "Available",
        "Quantity": 23,
    },
    {
        "ProductId": "HT-1071",
        "Category": "Graphic Cards",
        "Description": "Gladiator XLN: PCI-E GDDR5 3072MB DVI Out, TV Out low-noise",
        "Name": "Gladiator MX",
        "Price": 81.7,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1071.jpg",
        "Status": "Available",
        "Quantity": 16,
    },
    {
        "ProductId": "HT-1040",
        "Category": "Printers",
        "Description": "Print 2400 dpi image quality color documents at speeds of up to 32 ppm (color) or 36 ppm (monochrome), letter/A4. Powerful 500 MHz processor, 512MB of memory",
        "Name": "Laser Professional Eco",
        "Price": 830,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1040.jpg",
        "Status": "Available",
        "Quantity": 21,
    },
    {
        "ProductId": "HT-1041",
        "Category": "Printers",
        "Description": "Up to 22 ppm color or 24 ppm monochrome A4/letter, powerful 500 MHz processor and 128MB of memory",
        "Name": "Laser Basic",
        "Price": 490,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1041.jpg",
        "Status": "Available",
        "Quantity": 8,
    },
    {
        "ProductId": "HT-1602",
        "Category": "Desktop Computers",
        "Description": "3,4 Ghz quad core, 8 GB DDR3 SDRAM, 2000 GB Hard Disc, Graphic Card: Gladiator MX, Windows 8",
        "Name": "Gaming Monster",
        "Price": 1200,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1602.jpg",
        "Status": "Available",
        "Quantity": 24,
    },
    {
        "ProductId": "HT-1601",
        "Category": "Desktop Computers",
        "Description": "2,8 Ghz dual core, 4 GB DDR3 SDRAM, 1000 GB Hard Disc, Graphic Card: Gladiator MX, Windows 8",
        "Name": "Family PC Pro",
        "Price": 900,
        "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1601.jpg",
        "Status": "Available",
        "Quantity": 20,
    },
]
}
