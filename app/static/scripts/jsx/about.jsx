import ReactDOM from 'react-dom';


function AboutComponentItem(props){
  var aboutItem = props.items;

  if (aboutItem.type == "text"){
    return (<div className="about-item" dangerouslySetInnerHTML={{__html: aboutItem.content }}></div>)
  }

  if (aboutItem.type == "list"){
    var rows = [];

    aboutItem.content.map(function(listItem, i){
      rows.push(<li key={'about_list_item_'+i} ><div className="about-item" dangerouslySetInnerHTML={{__html: listItem }}></div></li>);
    });

    return (
        <div>
          <div className="about-list-title" dangerouslySetInnerHTML={{__html: aboutItem.title }}></div>
          <ul className="about-ul">
            {rows}
          </ul>
        </div>
    )
  }

  return (<div> SOMETHING WENT WRONG !</div>)
}


function AboutComponent(props) {
    var about = props.items;
    
    var rows = [];
    about.map(function(aboutItem, i){
      rows.push(<AboutComponentItem items={aboutItem} key={'about_item_' + i}/>);
    });

    return (
        <section className="content-section text-center about">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>About Me</h2>
              {rows}
            </div>
          </div>
        </section>
    )
}


if (info.about){
  ReactDOM.render(<AboutComponent items={info.about} />, document.getElementById('about'));
}