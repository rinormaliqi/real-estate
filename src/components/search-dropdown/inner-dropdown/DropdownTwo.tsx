import ListingDropdownModal from "@/modals/ListingDropdownModal"
import NiceSelect from "@/ui/NiceSelect"
import Link from "next/link"

const DropdownTwo = ({
   handleBathroomChange,
   handleBedroomChange,
   handleSearchChange,
   handlePriceChange,
   maxPrice,
   priceValue,
   handleResetFilter,
   selectedAmenities,
   handleAmenityChange,
   handleLocationChange,
   handleStatusChange, 
   handlePriceDropChange }: any) => {
   return (
      <>
         <form onSubmit={(e) => e.preventDefault()}>
            <div className="row gx-0 align-items-center">
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">Jam duke kerkuar...</div>
                     <NiceSelect className="nice-select"
                        options={[
                        { value: "apartments", text: "Blej Apartament" },
                        { value: "condos", text: "Banese me Qira" },
                        { value: "houses", text: "Blej Shtepi" },
                        { value: "industrial", text: "Depo me Qira" },
                        { value: "villas", text: "Bleje Ville" },
                        ]}
                        defaultCurrent={0}
                        onChange={handleStatusChange}
                        name=""
                        placeholder="" />
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left">
                     <div className="label">Lokacion</div>
                     <NiceSelect className="nice-select location"
                        options={[
                                 { value: "germany", text: "Prishtine, Kosova" },
                        { value: "dhaka", text: "Peja, Kosova" },
                        { value: "mexico", text: "Mitrovica, Kosova" },
                        { value: "france", text: "Gjakova, Kosova" },
                        { value: "india", text: "Ferizaj, Kosova" },
                        { value: "giza", text: "Gjilan, Kosova" },
                        { value: "cuba", text: "Drenas, Kosova" },
                        ]}
                        defaultCurrent={0}
                        onChange={handleLocationChange}
                        name=""
                        placeholder="" />
                  </div>
               </div>
               <div className="col-xl-3 col-lg-4">
                  <div className="input-box-one border-left border-lg-0">
                     <div className="label">Qmimi</div>
                     <NiceSelect
                        className="nice-select"
                        options={[
                           { value: "1", text: "$10,000 - $200,000" },
                           { value: "2", text: "$20,000 - $300,000" },
                           { value: "3", text: "$30,000 - $400,000" },
                        ]}
                        defaultCurrent={0}
                        onChange={(event) => handlePriceDropChange(event.target.value)}
                        name=""
                        placeholder=""
                     />
                  </div>
               </div>
               <div className="col-xl-3">
                  <div className="input-box-one lg-mt-20">
                     <div className="d-flex align-items-center">
                        <Link href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn sm tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                           <i className="fa-light fa-sliders-up"></i>
                        </Link>
                        <button className="fw-500 text-uppercase tran3s search-btn">Kerko</button>
                     </div>
                  </div>
               </div>
            </div>
         </form>
         <ListingDropdownModal
            handleSearchChange={handleSearchChange}
            handleBedroomChange={handleBedroomChange}
            handleBathroomChange={handleBathroomChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue}
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
         />
      </>
   )
}

export default DropdownTwo
