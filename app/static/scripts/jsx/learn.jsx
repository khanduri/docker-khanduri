import ReactDOM from 'react-dom';

/* Learn */

var ProgressDisplayComponent = React.createClass({
  render: function(){
    var title = this.props.title;
    var current = this.props.items;

   return (
      <div className="row" key={this.props.key}>
        <h2 className="text-center">{title}</h2>
        <div className="row">
            { Object.keys(current).map(function(category, i){
              return (
                <div key={'category_'+i} className="col-md-4"><div className="middle">{category.toUpperCase()}</div><br/>
                  {current[category].sort(function(a, b){ return -(a[1] - b[1]); }).map(function(topic, i){
                    return (<div key={'progress_'+i} className="progress"><div className={"progress-bar prog-"+topic[1]}>{topic[0]}</div></div>)
                  })}
                </div>
              )
            })}
        </div>
      </div>
    )
  }
});

var LearnComponent = React.createClass({
  render : function(){

    var rows = [];

    var current = this.props.items.current;
    rows.push(<ProgressDisplayComponent key={"current_interest"} items={current} title={"Current interest"}/>);

    var past = this.props.items.past;
    rows.push(<ProgressDisplayComponent key={'past_interest'} items={past} title={"In the Past"}/>);


    return (
      <section className="content-section learn">
        <div className="content-section learn-section">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              {rows}
            </div>
          </div>
        </div>
      </section>
    )
  }
});

if (info.learn){
  ReactDOM.render(<LearnComponent items={info.learn}/>, document.getElementById('learn'));
}
