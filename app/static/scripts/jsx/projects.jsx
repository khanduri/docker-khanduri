import ReactDOM from 'react-dom';

/* Activities */

function ActivitiesComponent(props){
    var activities = props.items;

    return (
      <section className="projects">
        <div className="content-section projects-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Activities</h2>

                <div className="row">
                  { Object.keys(activities).map(function(category, i){
                    return (
                      <div key={"activity_"+i} className="col-md-4"><div className="middle">{category.toUpperCase()}</div><br/>
                        {activities[category].map(function(task, i){
                          var link = task.link;
                          var name = task.name;
                          if (link){
                            return <div key={"activity_task_" + i} className="well"><a href={""+link}>{name}</a></div>
                          } else {
                            return <div key={"activity_task_" + i} className="well">{name}</div>
                          }
                        })}
                      </div>
                    )
                  })}
                </div>

            </div>
          </div>
        </div>
      </section>
    )
}


if (info.activities){
  ReactDOM.render(<ActivitiesComponent items={info.activities}/>, document.getElementById('activities'));
}