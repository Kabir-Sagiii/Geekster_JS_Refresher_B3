class Student {
  sname = "Geekster";
  scity = "Gurugram";

  printDetails() {
    console.log(this.sname, this.scity);
  }
}

var s1 = new Student();
s1.printDetails();
s1.sname = "Rajiv";
s1.scity = "Mumbai";
s1.printDetails();

var s2 = new Student();
s2.sname = "Sneha";
s2.scity = "Pune";
s2.printDetails();
