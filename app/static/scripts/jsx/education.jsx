import ReactDOM from 'react-dom';

/* Education */

var EducationDisplayComponent = React.createClass({
  render : function(){

    var institute = this.props.items;
    return (
      <li className="timeline-inverted" key={this.props.key}>
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
});

var EducationComponent = React.createClass({
  render : function(){

    var rows = [];

    var education = this.props.items;
    education.institutes.map(function(institute, i){
      rows.push(<EducationDisplayComponent items={institute} key={"institution_" + i}/>);
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
  ReactDOM.render(<EducationComponent items={info.education}/>, document.getElementById('education'));
}
