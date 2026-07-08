export type UserInfo = {
  firstName: string,
  secondName: string,
  email: string,
  cellNumber: string,
}

export type UserResponses = {
  interestsOfUser: string,
}

export type DataMember = {
  userInfo: UserInfo,
  userResponses: UserResponses,
}

export type VolunteerResponses = {
  yourHelp: '',
  freeHours: '',
  agreeWorkForFree: boolean | undefined,
}

export type DataVolunteer = {
  userInfo: UserInfo,
  userResponses: VolunteerResponses,
}
