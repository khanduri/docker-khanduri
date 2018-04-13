import ReactDOM from 'react-dom';

/* Experience */

function ExperienceDutyDisplayComponent(props){

    var duty = props.items;
    return (
      <div> - { duty }</div>
    )
}

function ExperienceContentDisplayComponent(props){

    var content = props.items;

    var rows = [];
    content.duties.map(function(duty, i){
      rows.push(<ExperienceDutyDisplayComponent items={duty} key={'duty_' + i}/>)
    });

    var team_name = "";
    if (content.team_name){ 
      team_name = <span>{content.team_name } :</span>;
    }

    return (
      <div className="timeline-body">
        <br/>
        <div>
        { team_name }
        </div>
        { content.team_desc }
        { rows }
      </div>
    )
}

function ExperienceDisplayComponent(props){
    var work = props.items;

    var rows = [];
    work.body.map(function(content, i){
      rows.push(<ExperienceContentDisplayComponent items={content} key={'content_' + i}/>);
    });

   return (
      <li className="timeline-inverted">
        <div className="timeline-badge"><i className={"fa " + work.fa_class }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h6 className="timeline-title"><a href={work.link}>{ work.title }</a></h6>
            <div className="timeline-location">{ work.loc }</div>
            <div className="timeline-dates">{ work.dates }</div>
            <div className="timeline-position"><b>{ work.position }</b></div>

            { rows }

          </div>
        </div>
      </li>

    )
}

function ExperienceComponent(props){
    var rows = [];

    var experiences = props.items;
    experiences.map(function(experience, i){
      rows.push(<ExperienceDisplayComponent items={experience} key={'experience_' + i} />);
    });

    return (
      <section className="experience">
        <div className="content-section experience-section">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
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

if (info.experience){
  ReactDOM.render(<ExperienceComponent items={info.experience} />, document.getElementById('experience'));
}