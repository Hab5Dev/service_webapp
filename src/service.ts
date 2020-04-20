import Seneca from 'seneca'
import MyServicePlugin, {ROLE_NAME as MyServicePluginRole} from './plugin'

const service = Seneca({
  quiet: true
})

service.use(MyServicePlugin)

service.act({
  role: MyServicePluginRole,
  cmd: 'hello',
  name: 'ExamplePlugin'
}, (err, result) => {
  if (err) {
    console.error(err)
  }
  console.log(result)
})
