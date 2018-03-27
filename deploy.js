const path = require('path')
var FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  username: '',
  password: '', // Optional, prompted if none given
  host: '#',
  port: 21,
  localRoot: path.join(__dirname, 'dist'),
  remoteRoot: '/',
  exclude: ['.git', '.idea', 'tmp/*', '.DS_Store', '.nojekyll']
}

ftpDeploy.on('uploaded', data => {
  console.log('### uploaded: ' + data.filename)
})

ftpDeploy.deploy(config, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('### finished')
  }
})
