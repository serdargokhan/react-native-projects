import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="806.35164" height="520.95563" viewBox="0 0 806.35164 520.95563" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M968.6184,323.47782h-647.62a22.71737,22.71737,0,0,0-22.69,22.69v341.62a22.58066,22.58066,0,0,0,6.18,15.54c.4.43.82.84,1.25,1.22a22.52375,22.52375,0,0,0,15.26,5.93h647.62a22.71733,22.71733,0,0,0,22.6898-22.69,1235.16009,1235.16009,0,0,0,0-341.62012A22.71727,22.71727,0,0,0,968.6184,323.47782Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M938.6184,287.47782h-647.62a22.71737,22.71737,0,0,0-22.69,22.69v341.62a22.58066,22.58066,0,0,0,6.18,15.54c.4.43.82.84,1.25,1.22a22.52375,22.52375,0,0,0,15.26,5.93h647.62a22.71738,22.71738,0,0,0,22.69-22.69v-341.62A22.71737,22.71737,0,0,0,938.6184,287.47782Z" transform="translate(-196.82418 -189.52218)" fill="#fff"/><path d="M672.348,515.13755a2.26935,2.26935,0,0,1-1.64469-3.93333l.1555-.61819q-.03071-.07427-.06179-.14839a6.09416,6.09416,0,0,0-11.24138.04177c-1.83859,4.42817-4.17942,8.86389-4.7558,13.54594a18.029,18.029,0,0,0,.31649,6.20047,72.28137,72.28137,0,0,1-6.57515-30.02077,69.76619,69.76619,0,0,1,.43274-7.783q.3585-3.1778.99471-6.31033a73.11887,73.11887,0,0,1,14.50012-30.98962,19.459,19.459,0,0,0,8.09295-8.39652,14.84349,14.84349,0,0,0,1.34991-4.05618c-.394.05168-1.48556-5.94866-1.1884-6.3168-.54906-.83317-1.53178-1.24732-2.13144-2.06034-2.98232-4.04341-7.0912-3.33741-9.2362,2.15727-4.58224,2.31266-4.6266,6.148-1.815,9.83683,1.78878,2.34681,2.03456,5.52232,3.60409,8.03478-.16151.20671-.32945.40695-.49091.61366a73.59138,73.59138,0,0,0-7.681,12.16859,30.5924,30.5924,0,0,0-1.8264-14.20958c-1.74819-4.21732-5.02491-7.76916-7.91045-11.415a6.27922,6.27922,0,0,0-11.184,3.08333q-.00887.08063-.01731.16119.6429.36267,1.25864.76992a3.0782,3.0782,0,0,1-1.24107,5.60174l-.06277.00968a30.62792,30.62792,0,0,0,.80734,4.57937c-3.70179,14.31579,4.29011,19.5299,15.70147,19.76413.25191.12916.49739.25832.74929.38108a75.11456,75.11456,0,0,0-4.04326,19.02779,71.24458,71.24458,0,0,0,.05167,11.50323l-.01938-.13562a18.82566,18.82566,0,0,0-6.4266-10.87028c-4.94561-4.06264-11.93283-5.55869-17.26826-8.82425a3.533,3.533,0,0,0-5.41121,3.43708l.02181.14261a20.67471,20.67471,0,0,1,2.31872,1.11733q.64288.36276,1.25864.76992a3.07824,3.07824,0,0,1-1.24108,5.6018l-.06282.00964c-.04519.00646-.084.013-.12911.01944a30.65462,30.65462,0,0,0,5.63854,8.82922c2.31464,12.49713,12.256,13.68283,22.89023,10.04354h.00648a75.09216,75.09216,0,0,0,5.0444,14.72621h18.02018c.06464-.20022.12274-.40693.1809-.60717a20.47486,20.47486,0,0,1-4.9863-.297c1.337-1.64059,2.674-3.29409,4.011-4.93462a1.119,1.119,0,0,0,.084-.09689c.67817-.8396,1.36282-1.67283,2.041-2.51246l.00036-.001a29.99051,29.99051,0,0,0-.87875-7.63985Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M961.3084,546.47782v36.31a22.71738,22.71738,0,0,1-22.69,22.69h-647.62a22.52375,22.52375,0,0,1-15.26-5.93c-.43-.38-.85-.79-1.25-1.22a22.58066,22.58066,0,0,1-6.18-15.54v-36.31C465.45971,513.91861,707.91906,524.94141,961.3084,546.47782Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M961.3084,586.47782v36.31a22.71738,22.71738,0,0,1-22.69,22.69h-647.62a22.52375,22.52375,0,0,1-15.26-5.93c-.43-.38-.85-.79-1.25-1.22a22.58066,22.58066,0,0,1-6.18-15.54v-36.31C449.77819,562.19449,696.72564,570.01309,961.3084,586.47782Z" transform="translate(-196.82418 -189.52218)" fill="#fff"/><path d="M961.3084,615.47782v36.31a22.71738,22.71738,0,0,1-22.69,22.69h-647.62a22.52375,22.52375,0,0,1-15.26-5.93c-.43-.38-.85-.79-1.25-1.22a22.58066,22.58066,0,0,1-6.18-15.54v-36.31C464.65905,595.0867,703.882,599.92594,961.3084,615.47782Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M907.348,510.13755a2.26935,2.26935,0,0,1-1.64469-3.93333l.1555-.61819q-.03071-.07427-.06179-.14839a6.09416,6.09416,0,0,0-11.24138.04177c-1.83859,4.42817-4.17942,8.86389-4.7558,13.54594a18.029,18.029,0,0,0,.31649,6.20047,72.28137,72.28137,0,0,1-6.57515-30.02077,69.76619,69.76619,0,0,1,.43274-7.783q.3585-3.1778.99471-6.31033a73.11887,73.11887,0,0,1,14.50012-30.98962,19.459,19.459,0,0,0,8.09295-8.39652,14.84349,14.84349,0,0,0,1.34991-4.05618c-.394.05168-1.48556-5.94866-1.1884-6.3168-.54906-.83317-1.53178-1.24732-2.13144-2.06034-2.98232-4.04341-7.0912-3.33741-9.2362,2.15727-4.58224,2.31266-4.6266,6.148-1.815,9.83683,1.78878,2.34681,2.03456,5.52232,3.60409,8.03478-.16151.20671-.32945.40695-.49091.61366a73.59138,73.59138,0,0,0-7.681,12.16859,30.5924,30.5924,0,0,0-1.8264-14.20958c-1.74819-4.21732-5.02491-7.76916-7.91045-11.415a6.27922,6.27922,0,0,0-11.184,3.08333q-.00887.08063-.01731.16119.6429.36267,1.25864.76992a3.0782,3.0782,0,0,1-1.24107,5.60174l-.06277.00968a30.62792,30.62792,0,0,0,.80734,4.57937c-3.70179,14.31579,4.29011,19.5299,15.70147,19.76413.25191.12916.49739.25832.74929.38108a75.11456,75.11456,0,0,0-4.04326,19.02779,71.24458,71.24458,0,0,0,.05167,11.50323l-.01938-.13562a18.82566,18.82566,0,0,0-6.4266-10.87028c-4.94561-4.06264-11.93283-5.55869-17.26826-8.82425a3.533,3.533,0,0,0-5.41121,3.43708l.02181.14261a20.67471,20.67471,0,0,1,2.31872,1.11733q.64288.36276,1.25864.76992a3.07824,3.07824,0,0,1-1.24108,5.6018l-.06282.00964c-.04519.00646-.084.013-.12911.01944a30.65462,30.65462,0,0,0,5.63854,8.82922c2.31464,12.49713,12.256,13.68283,22.89023,10.04354h.00648a75.09216,75.09216,0,0,0,5.0444,14.72621h18.02018c.06464-.20022.12274-.40693.1809-.60717a20.47486,20.47486,0,0,1-4.9863-.297c1.337-1.64059,2.674-3.29409,4.011-4.93462a1.119,1.119,0,0,0,.084-.09689c.67817-.8396,1.36282-1.67283,2.041-2.51246l.00036-.001a29.99051,29.99051,0,0,0-.87875-7.63985Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M895.84173,551.50346c0,.3264-.00488.6528-.00975.97436h-65.9105a11.00852,11.00852,0,0,1-8.04334-3.48335c.02435-.45795.06333-.911.112-1.3641,1.939-18.62486,26.1785-46.69955,36.82591-33.15255S895.84173,531.05652,895.84173,551.50346Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M930.91858,551.79874c.00342.22753-.00333.455-.00672.67908H884.9716a7.673,7.673,0,0,1-5.60628-2.42793c.017-.31919.04414-.635.07809-.95079,1.3515-12.98171,21.84235-35.88923,25.668-23.10749C914.86242,558.56875,930.71887,538.99209,930.91858,551.79874Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M938.6184,287.47782h-647.62a22.71737,22.71737,0,0,0-22.69,22.69v341.62a22.58066,22.58066,0,0,0,6.18,15.54c.4.43.82.84,1.25,1.22a22.52375,22.52375,0,0,0,15.26,5.93h647.62a22.71733,22.71733,0,0,0,22.6898-22.69c31.11084-87.83594,20.1709-210.86475,0-341.62012A22.71727,22.71727,0,0,0,938.6184,287.47782Zm20.69,254.48031A130.51969,130.51969,0,0,1,828.78871,672.47782H290.9984a20.53491,20.53491,0,0,1-13.29-4.85,21.37541,21.37541,0,0,1-2.99-3.1,20.49653,20.49653,0,0,1-4.41-12.74v-341.62a20.69,20.69,0,0,1,20.69-20.69H766.61155c106.42353,0,192.69685,86.27331,192.69685,192.69685Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M414.46838,627.42178c.00537.354-.00511.70754-.01039,1.056H343.0256a11.9308,11.9308,0,0,1-8.7172-3.77518c.02639-.49632.06864-.98735.12143-1.47838,2.10144-20.18522,22.91062-24.04076,39.91111-35.92992C393.47229,573.915,414.12073,603.72647,414.46838,627.42178Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M430.30823,618.766c-.15235.19385-.00351.493-.0072.73589H380.512a8.31585,8.31585,0,0,1-6.076-2.63134c.01839-.34593.04784-.68819.08463-1.03044,1.46473-14.0693,13.36474-24.62636,27.81836-25.04335C429.28332,590.01944,443.13928,602.453,430.30823,618.766Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M437.46856,539.42183c0,.35374-.00529.70749-.01057,1.056H366.0256a11.9308,11.9308,0,0,1-8.7172-3.77518c.02639-.49632.06864-.98735.12143-1.47838,2.10144-20.18522,24.78859-26.66061,39.91113-35.93S437.46856,517.26187,437.46856,539.42183Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M453.30823,530.766a4.05069,4.05069,0,0,0-.0072.73589H403.512a8.31585,8.31585,0,0,1-6.076-2.63134c.01839-.34593.04784-.68819.08463-1.03044,1.46473-14.0693,14.144-20.34315,27.81836-25.04335C447.92346,495.0336,457.2594,511.02334,453.30823,530.766Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M487.30823,544.74161a5.91819,5.91819,0,0,1-.0072.73621H437.512a8.31585,8.31585,0,0,1-6.076-2.63134c.01839-.34593.04784-.68819.08463-1.03044,1.46473-14.0693,17.72607-14.68869,27.81836-25.04367C468.68909,507.17862,485.26819,526.08584,487.30823,544.74161Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><rect x="562.48422" y="239.95563" width="20" height="245" fill="#3f3d56"/><path d="M911.38848,319.71781c-.74-14.46-5.66016-28.98-15.33008-39.75-4.22-4.7-22.05994-15.72-27.75-18.49,2.16016-16.99,13.78-26.79,5.28-41.32-10.79-18.43-33.30005-29.24-54.43006-26.13a52.68837,52.68837,0,0,0-21.16,8.16c-7.29993-6.38-17.28992-10.3-27.02-11.79-30.6499-4.7-63.41992,9.85-80.48,35.74-2.579,3.91344-2.754,9.76966-1.40987,16.75082,5.18065,26.90689-9.6649,53.13166-35.203,63.0626a3.6061,3.6061,0,0,0-1.307.8366c-14.74,15.25-19.58,39.31-11.87,59.08,1.82333,4.68,2.3664,12.816,7.367,13.03627,32.29571,1.42244,34.76959,19.04985,16.4563,45.26-3.83405,5.48734,1.73679,13.23894,5.2066,19.07377,7.98,13.43,24.09009,20.33,39.69006,21.25,15.53.92,30.87-3.19,45.88-7.28l20-.8c17.21,2.97,35.21,2.5,51.52-3.66,17.59-6.65,32.92993-20.50994,38.75-38.38995,1.99-6.11005,36.24,1.55,35.73-4.88,8.52-4.35-17.24-24.39-10.79-31.47A81.29094,81.29094,0,0,0,911.38848,319.71781Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M834.82061,424.12534c-4.60413,14.14447-15.176,25.756-28.0962,33.28973a83.62323,83.62323,0,0,0,19.104-4.6673c14.98572-5.6654,28.31543-16.57629,35.53961-30.73535C851.21764,422.022,836.122,420.12961,834.82061,424.12534Z" transform="translate(-196.82418 -189.52218)" opacity="0.1"/><path d="M890.51836,378.00778a81.29094,81.29094,0,0,0,20.87012-58.29c-.74-14.46-5.66016-28.98-15.33008-39.75-4.22-4.7-22.05994-15.72-27.75-18.49,2.16016-16.99,13.78-26.79,5.28-41.32-10.79-18.43-33.30005-29.24-54.43006-26.13a52.68837,52.68837,0,0,0-21.16,8.16c-7.29993-6.38-17.28992-10.3-27.02-11.79-17.68835-2.7124-36.07684.99719-51.7503,9.587a78.19408,78.19408,0,0,1,21.99249.18048c9.7301,1.49,19.72009,5.41,27.02,11.79,6.38012-4.18,24.871-14.85063,21.16-8.16-15.86151,28.59749,2.88568,42.63281,54.43006,26.13,8.20764-2.62783-2.76613,11.15069-15.72229,27.50541-11.97663,15.11824,1.27772,36.9496,20.22712,33.355,9.255-1.75563,16.54268-2.63469,17.96514-1.05042,9.66992,10.77,44.65234,27.75751,15.33007,39.75s-6.59008,42.63-20.87011,58.29c-4.53119,4.97382,6.82348,16.33844,11.03253,24.17127,10.37982-.8039,29.90137,2.39837,29.51532-2.46875C909.82842,405.12784,884.06841,385.0878,890.51836,378.00778Z" transform="translate(-196.82418 -189.52218)" opacity="0.1"/><path d="M678.29674,491.28245h81.43311a1,1,0,0,0,0-2H678.29674a1,1,0,0,0,0,2Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M788.54813,570.80963c-16.51076-21.96123-26.05369-46.51942-26.36641-74.51777a6.04125,6.04125,0,0,1,3.67595-7.70164l56.27747-19.91248a6.04121,6.04121,0,0,1,7.7016,3.676l26.3664,74.51777a6.04122,6.04122,0,0,1-3.67591,7.70163l-56.27746,19.91248A6.04122,6.04122,0,0,1,788.54813,570.80963Z" transform="translate(-196.82418 -189.52218)" fill="#e6e6e6"/><path d="M784.9012,546.77474c-9.93022-10.04034-14.1809-27.94788-16.95072-47.90679a5.65768,5.65768,0,0,1,3.44264-7.21281L819.75886,474.542a5.65791,5.65791,0,0,1,7.21308,3.44253l23.46252,66.31068a5.65792,5.65792,0,0,1-3.4429,7.21291L817.03,562.10937A25.202,25.202,0,0,1,784.9012,546.77474Z" transform="translate(-196.82418 -189.52218)" fill="#fff"/><path d="M827.61935,513.70644l-37.67558,13.44829a2.40023,2.40023,0,1,1-1.61379-4.52107l37.67558-13.44829a2.40023,2.40023,0,0,1,1.61379,4.52107Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M793.80731,511.79916l-8.28862,2.95863a2.40023,2.40023,0,1,1-1.6138-4.52107l8.28863-2.95863a2.40023,2.40023,0,1,1,1.61379,4.52107Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M834.714,533.58225l-37.67559,13.44829a2.40023,2.40023,0,1,1-1.61379-4.52107l37.67558-13.44829a2.40023,2.40023,0,0,1,1.6138,4.52107Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M831.16668,523.64435,793.4911,537.09263a2.40023,2.40023,0,1,1-1.61379-4.52107l37.67558-13.44828a2.40023,2.40023,0,0,1,1.61379,4.52107Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><circle cx="568.55724" cy="304.76026" r="10" fill="#6c63ff"/><path d="M692.46609,239.28245H611.033a1,1,0,0,1,0-2h81.4331a1,1,0,0,1,0,2Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M505.72665,274.75392c7.07237-26.54962,20.491-49.22368,42.31642-66.7638a6.04124,6.04124,0,0,1,8.32734-1.86634l50.42149,31.9583a6.0412,6.0412,0,0,1,1.86632,8.32731L566.34179,313.1732a6.0412,6.0412,0,0,1-8.3273,1.86636l-50.4215-31.9583A6.04122,6.04122,0,0,1,505.72665,274.75392Z" transform="translate(-196.82418 -189.52218)" fill="#e6e6e6"/><path d="M522.37562,257.03987c1.7622-14.01115,13.21954-28.41524,27.20483-42.92184a5.65768,5.65768,0,0,1,7.79881-1.74789l43.333,27.46547a5.65792,5.65792,0,0,1,1.74813,7.79895l-37.65587,59.41071a5.65792,5.65792,0,0,1-7.799,1.74773L530.1616,291.77872A25.202,25.202,0,0,1,522.37562,257.03987Z" transform="translate(-196.82418 -189.52218)" fill="#fff"/><path d="M574.76775,270.20862,540.92,248.88645a2.40023,2.40023,0,1,1,2.55866-4.06173l33.84776,21.32217a2.40023,2.40023,0,1,1-2.55867,4.06173Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M555.38245,242.43991l-7.44651-4.69088a2.40023,2.40023,0,0,1,2.55866-4.06173l7.44651,4.69087a2.40023,2.40023,0,0,1-2.55866,4.06174Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M563.51921,288.06506l-33.84776-21.32218a2.40023,2.40023,0,0,1,2.55866-4.06173l33.84776,21.32218a2.40023,2.40023,0,1,1-2.55866,4.06173Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M569.14348,279.13684l-33.84776-21.32217a2.40023,2.40023,0,0,1,2.55866-4.06174l33.84776,21.32218a2.40023,2.40023,0,1,1-2.55866,4.06173Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><circle cx="408.55724" cy="52.76026" r="10" fill="#6c63ff"/><path d="M516.94472,368.00105H411.068a2.28323,2.28323,0,1,1,0-4.56646H516.94472a2.28323,2.28323,0,0,1,0,4.56646Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/><path d="M570.54136,388.87517H411.068a2.28324,2.28324,0,1,1,0-4.56647H570.54136a2.28324,2.28324,0,0,1,0,4.56647Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M570.54445,405.17939h-159.48a2.285,2.285,0,0,0,0,4.57h159.48a2.285,2.285,0,0,0,0-4.57Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M570.54136,430.62341H411.068a2.28324,2.28324,0,1,1,0-4.56647H570.54136a2.28324,2.28324,0,0,1,0,4.56647Z" transform="translate(-196.82418 -189.52218)" fill="#f2f2f2"/><path d="M282.86952,478.219l4.80477-39.53638-13.077-.94-2.93321,41.4577a6.5324,6.5324,0,1,0,11.20541-.9813Z" transform="translate(-196.82418 -189.52218)" fill="#a0616a"/><path d="M299.66174,383.16186l0,0a10.98878,10.98878,0,0,0-11.69586,6.8257c-5.49653,13.81686-16.09944,40.92768-15.52367,43.03749.77534,2.84111,1.55027,3.09928-.51592,4.13279s-4.90772-.77409-2.06619,1.03351-.77451,2.32477.51717,3.616,22.73056,4.129,22.73056,4.129-4.73442-14.3964-3.14359-16.49667,6.75713.48185,4.17377-2.10068-4.9889-3.29581-1.97832-4.48923,5.64783-2.51256,5.64783-2.51256l10.29358-21.53939A10.99526,10.99526,0,0,0,299.66174,383.16186Z" transform="translate(-196.82418 -189.52218)" fill="#e6e6e6"/><polygon points="121.63 462.438 128.77 462.437 132.166 434.897 121.628 434.897 121.63 462.438" fill="#a0616a"/><path d="M318.2026,659.4085l21.95675-.00083V659.13a8.54665,8.54665,0,0,0-8.54618-8.546h-.00053l-4.01067-3.04269-7.483,3.04317-1.91669.00005Z" transform="translate(-196.82418 -189.52218)" fill="#2f2e41"/><polygon points="6.899 414.859 9.821 421.374 36.341 413.204 32.028 403.589 6.899 414.859" fill="#a0616a"/><path d="M196.82418,607.19957l8.98466,20.03435.25334-.1136a8.54666,8.54666,0,0,0,4.30116-11.29479l-.00022-.00049,1.13532-4.90453-5.83856-5.58283-.78428-1.74889Z" transform="translate(-196.82418 -189.52218)" fill="#2f2e41"/><circle cx="114.69578" cy="163.25137" r="13.61737" fill="#a0616a"/><path d="M335.72162,478.95276l-51.45828-1.63359s-10.88849,21.07047-4.21905,34.22237,1.3892,50.4122,1.3892,50.4122l-66.598,33.80113,5.71759,13.06877s14.70236-.8168,17.15276-3.26719a13.20283,13.20283,0,0,1,8.168-3.26719c1.63359,0,49.82467-21.23675,49.82467-21.23675L308.219,544.779l12.70371,49.54813-6.22934,44.02912,14.87056.39121s5.12923-2.57712,3.60144-6.44887-2.31792-5.5568,1.34434-8.79827,10.7546-52.32652,10.7546-52.32652l-8.41179-56.63947s-5.01027-1.41-.77721-5.23326-.09274-8.38451-.09274-8.38451,3.58017-5.06416-.047-4.25143-.214-19.34592-.214-19.34592" transform="translate(-196.82418 -189.52218)" fill="#2f2e41"/><path d="M324.22083,375.3995l-19.00017-1.17721-3.32222,5.49916s-7.47979-.418-5.84619,2.03235.68407.44423-1.7,2.26411-5.60336,2.143-3.9937,3.615c.23475.21467.13995.84969-.19327,1.77788a105.08223,105.08223,0,0,0-4.68112,55.77694c1.11652,5.6848,1.82851,9.83261,1.58327,10.07785-.8168.8168-4.90079,0-2.4504,2.4504s6.53439,0,1.6336,4.90078-15.19116,25.65443-3.26719,26.95434,56.35906-1.6336,55.54226-4.90079L332.80815,461.8l-4.65639-65.80547L323.4864,383.426Z" transform="translate(-196.82418 -189.52218)" fill="#e6e6e6"/><path d="M325.21409,490.82744l-7.938-39.02818-12.70369,3.24147,10.3209,40.25946a6.5324,6.5324,0,1,0,10.3208-4.47275Z" transform="translate(-196.82418 -189.52218)" fill="#a0616a"/><path d="M311.10027,395.33586l0,0a10.98877,10.98877,0,0,0-8.93883,10.17253c-.84758,14.84585-2.33788,43.91812-1.12477,45.73779,1.6336,2.45039,2.4504,2.45039.8168,4.084s-4.90079.8168-1.6336,1.63359,0,2.4504,1.6336,3.2672,22.87034-3.2672,22.87034-3.2672-9.042-12.16193-8.19661-14.65734,6.563-1.67862,3.29583-3.31221-5.77486-1.55-3.29583-3.63379,4.56412-4.16889,4.56412-4.16889l2.95782-23.6887A10.99525,10.99525,0,0,0,311.10027,395.33586Z" transform="translate(-196.82418 -189.52218)" fill="#e6e6e6"/><path d="M315.62509,365.89485a28.43522,28.43522,0,0,1-5.53861,3.3016,9.55549,9.55549,0,0,1-6.31553.52266,7.21354,7.21354,0,0,1-4.58812-4.34844c-.75032-2.05087-7.01825-4.44673-5.83566-6.28263a10.36129,10.36129,0,0,0,1.46389-2.40185,1.8198,1.8198,0,0,0-.96835-2.33073,1.6998,1.6998,0,0,0-1.82092,1.04859,4.96369,4.96369,0,0,0-.284,2.24139,3.64956,3.64956,0,0,1-1.00079-4.25916l-2.11818-1.06371c1.82833-.7122,8.78627-3.59713,7.2398-4.80481-1.3082-1.02161-5.51921-4.34049-5.04912-5.53616a9.94411,9.94411,0,0,1,2.26869-3.0838c1.82594-1.90632,3.817-3.90713,6.40206-4.44151,2.20909-.45667,4.47168.24184,6.64156.85847s4.5176,1.15309,6.64244.39566,3.73725-3.33674,2.67372-5.3261a4.24743,4.24743,0,0,1,3.884,2.44371l.36395-3.35021a10.71528,10.71528,0,0,1,4.38206,2.343c1.15887,1.20639,1.652,3.23.64164,4.56325-1.11975,1.47749-3.62377,1.64567-4.28678,3.37692-.58173,1.519.67869,3.0547,1.7312,4.29487s1.97219,3.16508.86783,4.3593c-.91386.98822-2.51837.6736-3.82117,1.01188-1.96511.51025-3.17352,2.58108-3.43093,4.595a24.85054,24.85054,0,0,0,.45214,6.05489,8.8256,8.8256,0,0,1-.89678,5.89652" transform="translate(-196.82418 -189.52218)" fill="#2f2e41"/><path d="M324.3084,357.47782h0c-1.39239,0-2.93542-.53991-2.93542-1.9323v-8.84328c0-1.39239,1.543-1.22442,2.93542-1.22442h0c3.47055-2.32642,6.41183,1.06564,6.5285,5.64605h0C330.797,356.06555,328.07976,359.2244,324.3084,357.47782Z" transform="translate(-196.82418 -189.52218)" fill="#3f3d56"/><path d="M322.37035,344.18106h-4.44513c-1.48645,0-7.32336-.10247-7.61682,1.29676-7.84421-1.38938-10.92655-1.42649-15.48132,1.15368a2.042,2.042,0,1,0,0,4.084l14.48132-.23767,5.53021,4.50219a3.08657,3.08657,0,0,0,3.08661,3.08661h4.44513A3.08657,3.08657,0,0,0,325.457,354.98c-1.424-2.751-1.65991-5.35165,0-7.71234A3.08662,3.08662,0,0,0,322.37035,344.18106Z" transform="translate(-196.82418 -189.52218)" fill="#6c63ff"/></svg>
`;

function SigninSVG() {
    return <SvgXml xml={xml} width="90%" height="80%" />;
}

export default SigninSVG;
