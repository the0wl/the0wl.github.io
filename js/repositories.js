async function loadRepositoriesData() {
  return await fetch("./repositories.json")
  .then(response => {
    return response.json()
  })
}

function createRepositoryElement(element) {
  const cardStyle = 'width: 100%;'
    .concat('height: 100%;')
    .concat('border-radius: 14px;')

  const imageStyle = 'width: 100%;'
    .concat('height: 100%;')

  const titleStyle = 'position: absolute;'
    .concat('top: calc(100% - 36px);')
    .concat('left: 0px;')
    .concat('width: 214px;')
    .concat('height: 36px;')
    .concat('background: rgba(0, 0, 0, 0.5);')

  const textStyle = 'font-family: \'Poppins\', sans-serif;'
    .concat('font-style: normal;')
    .concat('font-weight: 500;')
    .concat('font-size: 14px;')
    .concat('margin-left: 14px;')
    .concat('line-height: 36px;')
    .concat('color: #F7F9FA;')

  return `<a href=\"${element.link}\" target=\"_blank\">`
    .concat(`  <div style=\"${cardStyle}\">`)
    .concat(`    <img style=\"${imageStyle}\"`)
    .concat(`         src=\"${getImageFromRepository(element)}\"`)
    .concat(`    />`)
    .concat(`    <div style=\"${titleStyle}\">`)
    .concat(`      <span style=\"${textStyle}\">${element.title}</span>`)   
    .concat(`    </div>`)
    .concat(`  </div>`)
    .concat(`</a>`)
}

function getImageFromRepository(element) {
  return 'https://raw.githubusercontent.com/the0wl/'
    .concat(`${element.repositoryName}/`)
    .concat(`${element.branch}`)
}

loadRepositoriesData().then(data => {
  data.repositories.forEach(element => {
    const component = document.getElementById(`repo_${element.order}`)
    component.innerHTML = createRepositoryElement(element)
  })
})