import { useRef } from "react"
export default function CheckOutForm(){
    const formEl= useRef(null);
    function submitted(e){
        e.preventDefault();
        console.log(formEl.current.elements.fullname.value);
        console.log(formEl.current.elements.address.value);
    }
    return(
        <div className="">
            <form ref={formEl} onSubmit={submitted} className="grid grid-cols-1  bg-slate-600 rounded-xl shadow-lg  p-12   shadow-2xl w-96 mt-3 h-64">
             <label htmlFor="" className="text-xl text-white"> Full name   </label>
             <input  type="text" name="fullname" id="fullname"   className="rounded-md m-2"/>
          
<lable htmlFor="" className="text-xl text-white">Address</lable>
<input required type="text" name="address" id="address" className=" rounded-md m-2" />

<button className="bg-indigo-600 pl-5 pr-5 pt-2 pb-2 text-white rounded-xl hover:bg-indigo-900 m-2 ">Submit</button>
            </form>
        </div>
    )
}