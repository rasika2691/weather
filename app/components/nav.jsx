var React=require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
onSearch:function(e){
  e.preventDefault();
  alert('Not Yet Wired Up!');
},
  render:function() {
    return(
      <div>
        <nav className="navbar navbar-inverse ">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Rasika's Weather App</a>
            </div>
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink></li>
                <li><Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}} >About</Link></li>
                <li><Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Examples</Link></li>
              </ul>
              <form className="navbar-form navbar-right" role="search" onSubmit= {this.onSearch}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/><br></br>
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </nav>
      </div>
      );
  }

});


// var Nav = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <h2> Nav Component </h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//         <Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}} >About</Link>
//         <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Examples</Link>
//       </div>
//       );
//   }
// });

{/* Using arrow function*/}
// var Nav = ()=>{
//   return(
//     <div>
//       <h2> Nav Component </h2>
//       <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//       <Link to="/About" activeClassName="active" activeStyle={{fontWeight:'bold'}} >About</Link>
//       <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Examples</Link>
//     </div>
//     );
// }


module.exports = Nav;
