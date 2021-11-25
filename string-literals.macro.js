const {createMacro} = require('babel-macros')

module.exports = createMacro(stringLiteralsMacro)

function stringLiteralsMacro({references, babel}) {
  const t = babel.types;
  const escapedSpace = '<<ESCAPED-SPACE>>'
  references.w.forEach((ref) => { 
    // TODO: verify part of a TemplateLiteral
    // console.log('ref', ref)
    const par = ref.findParent(r => r.type === 'TaggedTemplateExpression')
    // console.log('par', par)
    const str = par.node.quasi.quasis.map(q => q.value.raw).join(' ')
    // console.log('str', str)
    const str2 = str.replace(/\\ /, escapedSpace)
    // console.log('str2', str2)
    const arr = t.ArrayExpression(str2.split(/\s+/).map(v => t.StringLiteral(v.replace(escapedSpace,' '))))
    // console.log('arr', arr)
    par.replaceWith(arr)
  })
};