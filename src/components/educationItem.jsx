export default function EducationItem({ institute, period, degree }) {
  return (
    <div className="col-lg-6 col-sm-6 mb-4">
      <h4 className="custom-item-heading">{degree}</h4>
      <hr style={{ color: "#a7a9ab", height: 2 }} />
      <p>
        {period}
        <br />
        {institute}
      </p>
    </div>
  );
}
