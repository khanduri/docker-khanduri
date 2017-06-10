
/* Activities */

var ActivitiesComponent = React.createClass({
  render: function(){
    var activities = this.props.items;

    return (
      <section id="projects" className="">
        <div className="content-section projects-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2 className="text-center">Activities</h2>

                <div className="row">
                  { Object.keys(activities).map(function(category){
                    return (
                      <div className="col-md-4"><div className="middle">{category.toUpperCase()}</div><br/>
                        {activities[category].map(function(task){
                          var link = task.link;
                          var name = task.name;
                          if (link){
                            return <div className="well"><a href={""+link}>{name}</a></div>
                          } else {
                            return <div className="well">{name}</div>
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
});
if (info.activities){
  React.render(<ActivitiesComponent items={info.activities}/>, document.getElementById('activities'));
}
