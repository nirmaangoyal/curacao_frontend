"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


const AllCampaign = () => {
  return (
    <>
      <Breadcrumb pageName="All Campaign" />

      <div class="">
      <div class="flex flex-col gap-10">
          <div class="rounded-sm border border-stroke bg-white px-5 pb-6 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
            <div class="flex flex-col">
              <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 tab">
                <div class="p-2.5 xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Sr. No.</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Name</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Details</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Channels</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Actions</h5>
                </div>
              </div>  

              <div class="clist grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 tab">
                <div class="p-2.5 xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">1</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Camapign Name</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Camapign Description</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">TV / OTT / SM</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base"><a href="#edit" class="edit">Edit</a> | <a href="#delete" class="delete">Delete</a></h5>
                </div>
              </div>

              <div class="clist grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 tab">
                <div class="p-2.5 xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">2</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Camapign Name 2</h5>
                </div>
                <div class="p-2.5 text-center xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">Camapign Description 2</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base">TV / OTT / SM / Radio</h5>
                </div>
                <div class="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 class="text-sm font-medium uppercase xsm:text-base"><a href="#edit" class="edit">Edit</a> | <a href="#delete" class="delete">Delete</a></h5>
                </div>
              </div> 

            </div>
        </div>


       
                          

                  
            </div>
      </div>  
      
    </>
  );
};

export default AllCampaign;
