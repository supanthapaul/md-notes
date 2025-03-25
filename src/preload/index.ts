import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated) {
	throw new Error('contextIsolation must be enabled in the BrowserWindow for the preload script to work.');
}

try {
	contextBridge.exposeInMainWorld('context', {
		// TODO
	})
}
catch(e) {
	console.error(e);
}
