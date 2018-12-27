const daysIdx = {sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};
const daysStr = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const daysMult = {"first":0,"second":7,"third":14,"fourth":21,"1st":0,"2nd":7,"3rd":14,"4th":21};

module.exports = {
	meetupDay:(year, month, day, occur) => {
		day = day.toLowerCase();

		if (month < 1 || month > 12)
			throw new Error("Invalid Month Input. Must be in range of [1:12]");
		else if (!daysIdx[day])
			throw new Error("Invalid day input");

		let nDay = null;

		if (occur == "last"){
		  let last = new Date((new Date(year,month,1)) - 1);
		  nDay = last.getDate();

		  if (last.getDay() > daysIdx[day])
		   nDay -= (last.getDay() - daysIdx[day]);
		  else if (last.getDay() < daysIdx[day])
		   nDay -= (last.getDay() + 7 - daysIdx[day]);

		}else if (daysMult[occur] != null){
		  let first = new Date(year, month - 1, 1);
		  nDay = first.getDate();

		  if (first.getDay() < daysIdx[day])
		    nDay += (daysIdx[day] - first.getDay());
		  else if (first.getDay() > daysIdx[day])
		    nDay += (daysIdx[day] + 7 - first.getDay());

		  nDay += daysMult[occur];

		}else if (occur == "teenth"){

		  let teenth = new Date(year, month - 1, 13);
		  nDay = teenth.getDate();

		  if (teenth.getDay() < daysIdx[day])
		    nDay += (daysIdx[day] - teenth.getDay());
		  else if (teenth.getDay() > daysIdx[day])
		    nDay += (daysIdx[day] + 7 - teenth.getDay());
		}else {
			throw new Error("Occurance input is invalid");
		}

		return new Date(year, month - 1, nDay);
	}
}