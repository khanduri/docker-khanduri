import ReactDOM from 'react-dom';


function AboutComponentItem(props){
  var aboutItem = props.items;
  return (<div className="about-item" dangerouslySetInnerHTML={{__html: aboutItem}}></div>)
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

function AboutPuneetComponent(){
    return (
        <section className="content-section text-center about">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h2>About Me</h2>
              <p>Hi there! I'm Puneet Khanduri</p>
              <p>I have done a ton of different things and "full-stack" means something different to me than most other folks.</p>
              <ul className="about-ul">
                <li>I started with designing parts of microprocessors</li>
                <li>then multi-chip modules using advanced interconnect technologies,</li>
                <li>shared memory systems spanning entire datacenters,</li>
                <li>custom networking protocols,</li>
                <li>embedded applications for small footprint JVMs,</li>
                <li>mobile and web applications,</li>
                <li>large scale distributed systems,</li>
                <li>libraries and tools used by engineers across the world,</li>
                <li>and machine learning.</li>

              </ul>
            </div>
          </div>
        </section>
    )
}

if (info.about){
  ReactDOM.render(<AboutComponent items={info.about} />, document.getElementById('about'));
}