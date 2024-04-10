import client from '../SanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)


const StaffImageCard1 = ({ employeeImageId, employeeName, designation, }) => {
  
  function urlFor(source) {
    return builder.image(source)
  }
  
  return (
    <div className="flex flex-col items-start justify-center gap-[10px] text-left text-8xl text-chocolate font-isidora-sans w-1/4 lg:w-auto ">
      <img
        className="w-[300px] relative h-[400px] object-cover  mq350small:w-auto "
        alt=""
        src={urlFor(employeeImageId).url()}
      />
      <div className="flex flex-col items-start justify-start">
        <div style={{color: '#853f10'}} className="relative sm:text-xl  ">{employeeName}</div>
        <i style={{color: '#853f10'}} className="relative inline-block font-open-sans mt-[-5px]  sm:text-xl">
          {designation}
        </i>
      </div>
    </div>
  );
};

export default StaffImageCard1;
