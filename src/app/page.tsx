import react from 'react';
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import GalleryComponent from './components/GalleryComponent';
import BrowseRange from './components/BrowserRange';
import ProductGrid from './components/ProductGrid';
import RoomInspiration from './components/RoomInspiration';
import Shop from './components/Shop';
import type { AppProps } from 'next/app';
import FilterBar from './components/FilterBar';
import ProductShop from './components/ProductShop';
import FeaturesComponent from './components/FeatureComponent';
import BreadCrumbs from './components/BreadCrumbs';
import ProductPage from './components/ProductPage';
import ProductDescription from './components/ProductDescription';

import RelatedProduct from './components/RelatedProduct';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutPage from './components/CheckoutPage';
import FooterComponent from './components/FooterComponent';

import ContactPage from './components/ContactPage';
import ProductCamparision from './components/ProductCamparision';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';

export default function page (){
  return (
    <main>


<Hero/>
<BrowseRange/>
<ProductGrid/>
<RoomInspiration/>
<GalleryComponent/>
<Navbar/>
<Shop/>
<FilterBar/>
<ProductShop/>
<FeaturesComponent/>
<BreadCrumbs/>
<ProductPage/>
<ProductDescription/>
<RelatedProduct/>
<FooterComponent/>
<Navbar/>
<Cart/>
<FeaturesComponent/>
<FooterComponent/>

<Navbar/>
<Checkout/>
<CheckoutPage/>
<FooterComponent/>

<Navbar/>
<Contact/>
<ContactPage/>
<FeaturesComponent/>
<FooterComponent/>

<Navbar/>
<ProductCamparision/>

<FeaturesComponent/>
<FooterComponent/>

<Navbar/>
<Blog/>
<BlogPage/>
<FeaturesComponent/>
<FooterComponent/>


   </main>
  )
}