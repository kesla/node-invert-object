
var invert = function(input) {
      var output = {}

      Object.keys(input).forEach(function(key) {
        var value = input[key]
        output[value] = output[value] || []
        output[value].push(key)
      })

      return output
    }

module.exports = invert
