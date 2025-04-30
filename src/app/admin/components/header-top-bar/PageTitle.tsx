"use client";

import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathname = usePathname();

  // Get the last part of the URL
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "Home";
  let pageTitle = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
    
  // Check if the pathname matches the pattern for company detail
  const companyDetailPattern = /^\/admin\/dashboard$/;
  if (companyDetailPattern.test(pathname)) {
    pageTitle = "Dashboard";
  }

  const userManagement = /^\/admin\/user$/;
  if (userManagement.test(pathname)) {
    pageTitle = "User";
  }

  const singleuserManagement = /^\/admin\/user\/singleUser$/;
  if (singleuserManagement.test(pathname)) {
    pageTitle = "Single User";
  }
  
  const products = /^\/admin\/user\/singleUser\/products$/;
  if (products.test(pathname)) {
    pageTitle = "Products";
  }

  const singleproduct = /^\/admin\/user\/singleUser\/products\/singleProduct$/;
  if (singleproduct.test(pathname)) {
    pageTitle = "Single Product";
  }

  const store = /^\/admin\/store$/;
  if (store.test(pathname)) {
    pageTitle = "Stores";
  }

  const storeManagement = /^\/admin\/store\/storeManagement$/;
  if (storeManagement.test(pathname)) {
    pageTitle = "Single Store";
  }

  const Products = /^\/admin\/store\/storeManagement\/products$/;
  if (Products.test(pathname)) {
    pageTitle = "Products";
  }

  const createstore = /^\/admin\/store\/addStore$/;
  if (createstore.test(pathname)) {
    pageTitle = "Create Store";
  }

  const editstore = /^\/admin\/store\/storeManagement\/editStore$/;
  if (editstore.test(pathname)) {
    pageTitle = "Single Store";
  }


  


  return <h1 className="text-2xl font-newyork text-white font-bold hidden md:block">{pageTitle}</h1>;
};

export default PageTitle;
