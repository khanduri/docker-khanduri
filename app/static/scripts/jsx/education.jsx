import ReactDOM from 'react-dom';

/* Education */

function EducationDisplayComponent(props){
  
    var institute = props.items;
    return (
      <li className="timeline-inverted">
        <div className="timeline-badge"><i className="fa fa-graduation-cap"></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <div className="timeline-title"><a href={institute.link}>{ institute.title }</a></div>
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

function EducationComponent(props){
    var rows = [];

    var education = props.items;
    education.institutes.map(function(institute, i){
      rows.push(<EducationDisplayComponent items={institute} key={"institution_" + i}/>);
    });

    return (
      <section className="education">
        <div className="content-section education-section">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
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

if (info.education){
  ReactDOM.render(<EducationComponent items={info.education}/>, document.getElementById('education'));
}