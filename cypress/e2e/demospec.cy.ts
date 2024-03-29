describe('template spec', () => {
  let userid: string;
  it('passes', () => {
    
    cy.request({
      method: 'POST',
      url: "https://dummy.restapiexample.com/api/v1/create",
      body: {"name":"TestUser1004","salary":"600001","age":"7881"}
    }).then(( response ) => {
      userid = response.body.data.id;
      cy.log('userid--'+userid);
      expect(response.body.data.id).to.equal(userid) 
  }),
    cy.request({
        method: 'DELETE',
        url: 'https://dummy.restapiexample.com/api/v1/delete/'+userid
      }).  
    then(( response ) => {
      const id = response.body.data;
      cy.log('id--'+id);
      expect(userid).to.equal(id)
  })
})
})