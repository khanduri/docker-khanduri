
/* Education */

var EducationDisplayComponent = React.createClass({
  render : function(){

    var institute = this.props.items;
    return (
      <li className="timeline-inverted" key={institute.id}>
        <div className="timeline-badge"><i className="fa fa-graduation-cap"></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <div className="timeline-title">{ institute.title }</div>
            <div className="timeline-dates">{ institute.dates }</div>
            <div className="timeline-location">{ institute.loc }</div>
            <br/>
            <div className="timeline-course">{ institute.course }</div>
            <div className="timeline-body">{ institute.desc }</div>
          </div>
        </div>
      </li>
    )
  }
});

var EducationComponent = React.createClass({
  render : function(){

    var rows = [];

    var education = this.props.items;
    education.institutes.map(function(institute){
      rows.push(<EducationDisplayComponent items={institute} />);
    });

    return (
      <section id="education" className="">
        <div className="content-section education-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Education</h2>

              <div className="container">
                <ul className="timeline">
                  {rows}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
});

if (info.education){
  React.render(<EducationComponent items={info.education} key={"education"} />, document.getElementById('education'));
}
