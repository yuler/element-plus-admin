declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import {type DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// import 'vue-router'
// declare module 'vue-router' {
// 	interface RouteMeta {
// 		// is optional
// 		isAdmin?: boolean
// 		// must be declared by every route
// 		requiresAuth: boolean
// 	}
// }
