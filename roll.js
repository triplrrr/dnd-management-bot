function getRandom( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min; //The maximum is inclusive and the minimum is inclusive
}

exports.parseRoll = (cmd) => {
  let pattern = /([0-9]*)?d([0-9]+)(d[0-9]*)?/;
  let match = pattern.exec(cmd);

  //console.log(match);

  if ( match === undefined ) {
    throw TypeError( "input is not a valid dice roll string" )
  }

  let sides = parseInt( match[2] );

  let count;
  try {
    count = parseInt( match[1] );
  } catch ( err ) {
    count = 1
  }

  let rolls = Array(  count )
    .fill()
    .map( () => getRandom( 1, sides )
  );
  let dropped = Array();
  let drops;
  try {
    drops = parseInt( match[3].substr( 1 ) );
  } catch (err) {
    drops = 0
  }
  for ( let i = 0 ; i < drops ; i++ ) {
    // get the index of the smallest item in the array and add it to the list of dropped rolls and remove it from the list of valid rolls
    let tmp = rolls.indexOf( Array.min (rolls ) );
    dropped.push( rolls[tmp] );
    rolls.splice( tmp, 1 );
  }

  return {
        "string": cmd,
        "count": count,
        "sides": sides,
        "drops": drops,
        "total": rolls.reduce( function( a, b ){ return a + b; }, 0 ),
        "rolls": rolls,
        "dropped": dropped
  };/**/
  //return ["the test is good"];
}
