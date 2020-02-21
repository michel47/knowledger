// holowiki js file

//const qmdata = '$qmjson$'
//const map_url = 'https://gateway.ipfs.io/ipfs/' + qmdata + '/wikimap.json';
//const map_url = 'http://127.0.0.1:8080/ipfs/' + qmdata + '/wikimap.json';
const map_url = 'https://cloudflare-ipfs.com/ipfs/' + qmdata + '/wikimap.json';

// anonymous functions ...
const status = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp)
  }
  return Promise.reject(new Error(resp.statusText))
}

get_map(map_url,sublinks)

function get_map(url,callback) {
   fetch(url, { mode:'cors' })
     .then(status)
     .then( resp => resp.json() )
     .then( map => callback(map) )
   .catch(function(error) {
      console.log('catch: '+error)
   });
}

function sublinks(map) {
  var bod = document.getElementsByTagName('body')[0];
  buf = bod.innerHTML;
  let rex;
  for (let key in map) {
     let href = map[key]
	rex = RegExp('\\[(.*)]\\['+key+'\\]') // [info][wikilink]
	buf = buf.replace(rex,'<a href="'+href+'" alt="'+key+'">$1</a>')
        rex = RegExp('\\[?\\['+key+'\\]\\]?') // [[wikilink]]
	buf = buf.replace(rex,'<a href="'+href+'">'+key+'</a>')
  }
  bod.innerHTML = buf;

}


const maplinks = (e,m) => { // e=element, m=map_url
   fetch(m, { mode:'cors' })
     .then(status)
     .then( resp => resp.json() )
     .then( map => {
        buf = e.innerHTML;
        let rex;
        for (let key in map) {
          let href = map[key]
          rex = RegExp('\\[(.*)]\\['+key+'\\]') // [info][wikilink]
          buf = buf.replace(rex,'<a href="'+href+'" alt="'+key+'">$1</a>')
          rex = RegExp('\\[?\\['+key+'\\]\\]?') // [[wikilink]]
          buf = buf.replace(rex,'<a href="'+href+'">'+key+'</a>')
        }
        e.innerHTML = buf;
      } 
     )
   .catch(function(error) {
      console.log('catch: '+error)
   });

}
//maplinks(bod,map_url);
 

function error(e) {
  console.log('catch: '+e)
}
