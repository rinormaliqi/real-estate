import NiceSelect from "@/ui/NiceSelect";

const DropdownOne = ({ style }: any) => {

   const selectHandler = (e: any) => { };

   const searchHandler = () => {
      window.location.href = '/listing_0';
   };

   return (
      <form onSubmit={(e) => { e.preventDefault(); searchHandler(); }}>
         <div className="row gx-0 align-items-center">
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left">
                  <div className="label">Jam ne kerkim per...</div>
                  <NiceSelect className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "apartments", text: "Blej Apartament" },
                        { value: "condos", text: "Banese me Qira" },
                        { value: "houses", text: "Blej Shtepi" },
                        { value: "industrial", text: "Depo me Qira" },
                        { value: "villas", text: "Bleje Ville" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-4"} col-lg-4`}>
               <div className="input-box-one border-left">
                  <div className="label">Lokacion</div>
                  <NiceSelect className={`nice-select location ${style ? "fw-normal" : ""}`}
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
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-xl-3 col-lg-4">
               <div className="input-box-one border-left border-lg-0">
                  <div className="label">Qmimi</div>
                  <NiceSelect
                     className={`nice-select ${style ? "fw-normal" : ""}`}
                     options={[
                        { value: "1", text: "$10,000 - $200,000" },
                        { value: "2", text: "$20,000 - $300,000" },
                        { value: "3", text: "$30,000 - $400,000" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className={`${style ? "col-xl-3" : "col-xl-2"}`}>
               <div className="input-box-one lg-mt-10">
                  <button className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}>{style ? "Kerko" : "Kerko"}</button>
               </div>
            </div>
         </div>
      </form>
   );
};

export default DropdownOne;
