import React from 'react'
import StaffImageCard1 from "../components/StaffImageCard1";
import StaffImageCard from "../components/StaffImageCard";

function ThirdPage({employeeData}) {
  

  const sortedArray = employeeData.sort((a, b) => {
    // Convert the _updatedAt strings to Date objects
    const dateA = new Date(a._updatedAt);
    const dateB = new Date(b._updatedAt);
    
    // Compare the dates
    return dateB - dateA; // Descending order
  });

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[50px] px-[50px] md:items-center md:justify-start md:pl-5 md:pr-5 md:box-border sm:pl-[15px] sm:pr-[15px] sm:box-border md:py-5">
    <div className="self-stretch flex flex-col items-start justify-center  px-[50px] lg:px-0">
    <div style={{color: '#853f10'}} className="relative text-left text-[32px] mb-10  ">¡CONÓCENOS!</div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-between gap-[50px]  lg:gap-[10px] md:gap-[20px] md:justify-evenly">
        {
          employeeData && sortedArray.map((e, index)=>{
            return         <StaffImageCard1
            key={index}
            employeeImageId={e.employeeImg}
            employeeName={e.name}
            designation={e.designation}
        />
          })
        }

        {/* <StaffImageCard1
          employeeImageId="/FLORIE JAMES.png"
          employeeName="FLORIE JAMES"
          coordinationLeaderImageUr="Coordination leader"
        />
        <StaffImageCard1
          employeeImageId="/PAOLAH ROSALES.png"
          employeeName="PAOLAH ROSALES"
          coordinationLeaderImageUr="Project Manager"
        />
        <StaffImageCard
          imageAltText="/ERICK NIEVA.png"
          personImageUrl="ERICK NIEVA"
          roleDescription="Community manager and"
          plannerRoleImage=" planner Senior"
        />
        <StaffImageCard1
          employeeImageId="/ALEJANDRA SERRANO.png"
          employeeName="ALEJANDRA SERRANO"
          coordinationLeaderImageUr={`Deco&Style Junior`}
        />
        <StaffImageCard
          imageAltText="/IVANA LABRADA.png"
          personImageUrl="IVANA LABRADA"
          roleDescription="Creative and planner "
          plannerRoleImage="Junior"
        />
        <StaffImageCard1
          employeeImageId="/SANTIAGO GAMBOA.png"
          employeeName="SANTIAGO GAMBOA"
          coordinationLeaderImageUr="Content Creator"
        /> */}
      </div>
    </div>
  </div>
  )
}

export default ThirdPage