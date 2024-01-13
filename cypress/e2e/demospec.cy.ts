describe('template spec', () => {
  let userid: string;

  it('passes', () => {
    
    cy.request({
      method: 'POST',
      url: "https://dummy.restapiexample.com/api/v1/create",
      body: {"name":"TestUser1034","salary":"600001","age":"7881"},
      failOnStatusCode: false
    }).then(( response ) => {
      userid = response.body.data.id;
      //cy.log('userid--'+userid);      
      expect(response.body.data.id).to.equal(userid) 
      return userid
      
  }).then(userid => {
    cy.log('userid delete--'+userid);
    cy.request({
      method: 'DELETE',
      url: `https://dummy.restapiexample.com/api/v1/delete/${userid}`,
      failOnStatusCode: false
    }).  
  then(( response ) => {
    const id = response.body.data;   
    expect(String(userid)).to.equal(id)
})
})
  })

})