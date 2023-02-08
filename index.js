const { generatePdf } = require('./generatePdf')

generatePdf({
  data: {
    certificateId: '5d6b9b0e-6c5c-4b9d-8c1d-3f2f8e1e0d2b',
    eventTitle: 'Event Title',
    username: 'John Doe',
    dateYear: 'November 2022',
    eventType: 'Hackathon',
    category: 'Data scientist',
    company: 'Schneider Electric'
  },
  certificateName: 'certificate'
})
