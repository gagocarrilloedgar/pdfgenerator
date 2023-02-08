exports.generatePdfName = (username, eventTitle) => {
  const usernameReplaced = username.replace(' ', '-')
  const eventTitleReplaced = eventTitle.replace(' ', '-')
  return `${usernameReplaced}-${eventTitleReplaced}`.toLowerCase()
}
