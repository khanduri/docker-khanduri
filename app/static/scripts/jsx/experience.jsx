
/* Experience */

var ExperienceDutyDisplayComponent = React.createClass({

  render: function(){
    var duty = this.props.items;
    return (
      <div> - { duty }</div>
    )
  }
});

var ExperienceContentDisplayComponent = React.createClass({

  render: function(){
    var content = this.props.items;

    var rows = [];
    content.duties.map(function(duty){
      rows.push(<ExperienceDutyDisplayComponent items={duty} />)
    });

    return (
      <div className="timeline-body">
        <br/>
        <div>
        <b>{ content.team_name }:</b>
        </div>
        { content.team_desc }
        { rows }
      </div>
    )
  }
});

var ExperienceDisplayComponent = React.createClass({
  render: function(){
    var work = this.props.items;

    var rows = [];
    work.body.map(function(content){
      rows.push(<ExperienceContentDisplayComponent items={content} />);
    });

   return (
      <li className="timeline-inverted">
        <div className="timeline-badge"><i className={"fa " + work.fa_class }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">{ work.title }</h4>
            <div className="timeline-location">{ work.loc }</div>
            <div className="timeline-dates">{ work.dates }</div>
            <div className="timeline-position">{ work.position }</div>

            { rows }

          </div>
        </div>
      </li>

    )
  }
});

var ExperienceComponent = React.createClass({
  render : function(){

    var rows = [];

    var experiences = this.props.items;
    experiences.map(function(experience){
      rows.push(<ExperienceDisplayComponent items={experience} />);
    });

    return (
      <section id="experience" className="">
        <div className="content-section experience-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Experience</h2>

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

if (info.experience){
  React.render(<ExperienceComponent items={info.experience} />, document.getElementById('experience'));
}
