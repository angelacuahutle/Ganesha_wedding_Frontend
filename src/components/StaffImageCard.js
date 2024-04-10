const StaffImageCard = ({
  imageAltText,
  personImageUrl,
  roleDescription,
  plannerRoleImage,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[10px] text-left text-8xl text-chocolate font-isidora-sans sm:flex-1">
      <img
        className="w-[300px] relative h-[400px] object-cover sm:self-stretch sm:w-auto"
        alt=""
        src={imageAltText}
      />
      <div className="flex flex-col items-start justify-start">
        <div className="relative">{personImageUrl}</div>
        <i className="relative inline-block font-open-sans mt-[-5px]">
          <p className="m-0">{roleDescription}</p>
          <p className="m-0">{plannerRoleImage}</p>
        </i>
      </div>
    </div>
  );
};

export default StaffImageCard;
