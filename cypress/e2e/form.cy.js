describe("Entry Form", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("İsim inputunu al ekrana yazdır", () => {
    const newName = "Oguzhan";
    cy.get("[data-cy=cyName]").type(`Ahmet ${newName}{enter}`);
    cy.get("[data-cy=cyName]").should("have.value", newName);
  });
  it("Email adresi input alanını al ekrana yazdır", () => {
    const newEmail = "alperhanoguz@gmail.com";
    cy.get("[data-cy=cyEmail]").type(`${newEmail}{enter}`);
    cy.get("[data-cy=cyEmail").should("have.value", newEmail);
  });

  it("Şifre alanına git şifre giriş kontrolü sağla ve inputa yazdır", () => {
    const newPassword = Number("1234");
    cy.get("[data-cy=cySifre]").type(`1234{enter}`);
    cy.get("[data-cy=cySifre]").should("have.value", newPassword);
  });

  it("Sifre inputunun 9 karakter ile kontrolü", () => {
    cy.get("[data-cy=cySifre]").type(`ABCDEFGHI{enter}`);
    cy.get("[data-cy=error-sifre]").should("be.visibled"); //! Hatayı bulamadım
  });
  it("Bütün alanlar dolu olduğunda send butonu aktiflesşiyor mu", function () {
    cy.get("[data-cy=cyName").type(`abc{enter}`);
    cy.get("[data-cy=cyEmail").type(`abc@a.com{enter}`);
    cy.get("[data-cy=cySifre").type(`1234{enter}`);
    cy.get("[data-cy=cySartlar").check();
    cy.get("[data-cy=cyButton").should("be.disabled");
  });
});
