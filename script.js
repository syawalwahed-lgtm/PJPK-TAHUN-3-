const questions=[
["Apakah maksud imbangan?","Keupayaan mengekalkan kedudukan badan dengan stabil.",["Bergerak secepat mungkin","Keupayaan mengekalkan kedudukan badan dengan stabil.","Melompat setinggi mungkin","Berlari tanpa henti"]],
["Apakah imbangan statik?","Badan berada pada satu kedudukan tanpa bergerak.",["Badan berada pada satu kedudukan tanpa bergerak.","Berlari sambil mengimbang.","Melompat dan berpusing.","Berjalan pantas."]],
["Apakah contoh imbangan dinamik?","Kereta sorong.",["Duduk diam","Berdiri tegak tanpa bergerak","Kereta sorong","Baring tanpa bergerak"]],
["Apakah yang perlu dilakukan sebelum aktiviti?","Memastikan kawasan aktiviti selamat.",["Terus berlari","Memastikan kawasan aktiviti selamat.","Menolak rakan","Bermain tanpa arahan"]],
["Mengapa kita perlu mengikut arahan guru?","Untuk melakukan aktiviti dengan betul dan selamat.",["Untuk bermain lebih lama","Untuk melakukan aktiviti dengan betul dan selamat.","Supaya boleh keluar kelas","Supaya tidak perlu memanaskan badan"]],
["Apakah contoh imbangan yang dilakukan secara berpasangan?","Tugu berpasangan.",["Tugu berpasangan","Larian pecut","Lompat jauh","Baling bola"]],
["Apakah fungsi tapak sokongan dalam imbangan?","Membantu badan kekal stabil.",["Membuat badan lebih berat","Membantu badan kekal stabil.","Membolehkan kita berlari","Menghasilkan bunyi"]],
["Apakah contoh pergerakan yang memerlukan kawalan badan?","Jambatan panjang.",["Jambatan panjang","Makan","Membaca","Menulis"]],
["Jika hilang keseimbangan, apakah tindakan yang sesuai?","Berhenti dan kembali ke posisi selamat.",["Teruskan walaupun sakit","Berhenti dan kembali ke posisi selamat.","Menolak rakan","Berlari keluar"]],
["Apakah sikap yang baik semasa aktiviti PJPK?","Bekerjasama dan menjaga keselamatan.",["Mengganggu rakan","Bekerjasama dan menjaga keselamatan.","Tidak mendengar guru","Bermain sesuka hati"]]
];

let current=0,score=0,answers=[];

function startQuiz(){
 current=0; score=0; answers=[];
 document.getElementById("startBtn").classList.add("hidden");
 document.getElementById("result").classList.add("hidden");
 renderQuestion();
}
function renderQuestion(){
 const q=questions[current];
 const box=document.getElementById("quiz");
 box.innerHTML=`<div class="question"><b>Soalan ${current+1} daripada ${questions.length}</b><h3>${q[0]}</h3>
 ${q[2].map((o,i)=>`<button class="option" onclick="choose(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div>`;
}
function choose(i){
 const q=questions[current];
 const opts=document.querySelectorAll(".option");
 opts.forEach(x=>x.disabled=true);
 opts[i].classList.add(i===q[2].indexOf(q[1])?"correct":"wrong");
 if(i===q[2].indexOf(q[1]))score++;
 answers.push(i);
 setTimeout(()=>{
   current++;
   if(current<questions.length) renderQuestion();
   else finishQuiz();
 },650);
}
function finishQuiz(){
 document.getElementById("quiz").innerHTML="";
 const pct=Math.round(score/questions.length*100);
 let msg=pct>=80?"🏆 Cemerlang!":pct>=60?"👏 Bagus! Teruskan usaha.":"💪 Cuba lagi! Baca nota dan ulang kuiz.";
 const r=document.getElementById("result");
 r.classList.remove("hidden");
 r.innerHTML=`<strong>${msg}</strong><br>Markah: <b>${score}/${questions.length}</b> (${pct}%)<br><br>
 <button class="primary" onclick="startQuiz()">Ulang Kuiz</button>`;
}