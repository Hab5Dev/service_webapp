
export const ROLE_NAME = 'test'

interface PluginConstructor {}

export default function ServicePlugin (props: PluginConstructor) {
  // @ts-ignore
  this.add({ role: ROLE_NAME, cmd: 'hello' }, (request: HelloRequestProps, response) => {
    response({
      result: `Hello from ${request.name}`
    })
  })
}
