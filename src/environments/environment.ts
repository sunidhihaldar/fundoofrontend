// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userApiUrl: 'http://localhost:8083/user',
  registerUrl: '/registration',
  loginUrl: '/login',
  userVerifyUrl: '/verification',
  forgotPasswordUrl:'/forgotPassword',
  updatePasswordUrl: 'updatePassword',

  noteApiUrl: 'http://localhost:8083/note',
  createNoteUrl: '/create',
  getAllNotesUrl: '/getAllNotes',
  pinNote: '/pin',
  updateNote: '/updateNote',
  reminderUrl: '/setReminder',
  getAllReminderNotesUrl: '/getAllNotes/reminder',
  getAllArchivedNotesUrl: '/getAllNotes/archived',
  getAllTrashNotesUrl: '/getAllNotes/trashed',
  deleteNoteUrl: '/trash',
  archiveNoteUrl: '/archive',
  updateColourUrl: '/updateColour',
  deleteNotePermanentlyUrl: '/delete',

  labelApiUrl: 'http://localhost:8083/labels',
  getAllLabelsUrl: '/getAllLabels'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
