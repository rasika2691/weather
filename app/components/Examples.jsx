var React = require('react');
var {Link} = require('react-router');
var Examples = (props)=>{
  return(
    <div>
      <h2 >Examples</h2>
      <h4>Here are the few example locations to try out </h4>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia,PA</Link>
        </li>
        <li>
          <Link to='/?location=Mumbai'>Mumbai,India</Link>
        </li>
      </ol>
    </div>
  );
}
module.exports = Examples;
