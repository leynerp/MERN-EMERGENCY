export const validateDemandData = (schema) => (req, resp, next) => {
  try {
    schema.parse(req.body)
    next()
  } catch (error) {
    const allErrors = []
    error.issues.forEach(e => {
      const message = { fiel: e.path, message: e.message }
      allErrors.push(message)
    })
    resp.status(403).json({ errors: allErrors })
  }
}
