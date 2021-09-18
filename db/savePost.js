const savePost = (entries) => {
  INSERT INTO employee (title, issues, body) VALUES
  (`${entries.title}`,`${entries.issues}`, `${entries.body}`)

}


// title: entries.projectText,
// issues: entries.issuesText,
// body: entries.reflectText,