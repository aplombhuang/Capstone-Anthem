
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Author Aplomb Tr Huang
 * @Team VCU Capstone Anthem Project
 * This is a cluster forming program to eliminate 
 * any noice from mean and std calculation 
 */
public class cluster
{
	public static void main(String[] args) throws  FileNotFoundException {

		Scanner input = new Scanner(new File("updated_data_in.txt")); // This is where the data from T-SQL database 
		
		ArrayList <String> inStr = new ArrayList<>(); // this array list stores the lines taken from txt file
		
		ArrayList <String> toString = new ArrayList<>(); // this array list will store out put after process and prep for print
		
		ArrayList<Integer> numArray = new ArrayList<>(); // this array list stores the duration of each job code, used in STD calculation 
		
		while(input.hasNextLine()) {inStr.add(input.nextLine());} //read all the lines from txt file and store in inStr array
		
		input.close(); // close file
		
		String[] strArray= new String[4]; // this array takes each line in 4 parts
		
		String str = inStr.get(0); // getting the first string
        
        strArray = str.split("\t"); // line is separated by "tab"
        
        String mdy = strArray[1]; // Date data is in the second part
	
        Date date = new Date(mdy); // date method
	
        int month = 1; month += date.getMonth(); // parsing date in the correct format
	
        int year = 1900; year += date.getYear(); // parsing date in the correct format
        
        String jobCode = strArray[0]; // job code data is in the first part

		int j = 0; double stdMulti = 1.5; // std multiplier variable
		
		int keyCount = 1, // database primary key auto increment
				
				jobMonthCount =0, // counting a monthly job code count for each job code
				
				failCount = 0, // counting job code which status is fail
				
				abnorCount = 0; // counting job code which duration is 0 but status says success (which is abnormal)
		
		do {
			
            str = inStr.get(j); // getting each line from inStr
            
            strArray = str.split("\t"); // separating each line in 4 parts 
            
            String jobCD = strArray[0]; // initialize value for job code
            
            mdy = strArray[1];
		
            date = new Date(mdy);
		
		int tempM = 1; tempM += date.getMonth(); // initialize value for month
		
		int tempY = 1900; tempY += date.getYear(); // initialize value for year
		
		if (jobCD.equals(jobCode) && tempM == month && tempY == year && j < inStr.size()-1) // if the next job code is equal to the current, next month, year is the same as current 
		{ 
		
		int duration = Integer.parseInt(strArray[2]); // parsing the duration value from string to integer
	
		if(duration > 0 && strArray[3].equals("Success")) 
		{  int pose = 0; 
		    
			if(numArray.isEmpty()) {numArray.add(duration);}// add the initial value to numArray
			
			else  // this is where the sorting of the arraylist starts
			{
				for(pose = 0; pose< numArray.size(); pose ++)
					{  
					  if(duration <= numArray.get(pose)) {numArray.add(pose,duration); break;} // find a position for the new duration by finding its bigger number
					  
					  else { if(pose == numArray.size()-1) {numArray.add(duration); break;} }// if non of the number in num array is biggr than duration, add it to the last of the array
					  
					} // this is where the sorting ends
			}
		} // if status says success and duration is not 0 add count of success, and add this duration to numArray and sorted
		
		else if(strArray[3].equals("Failure")){failCount ++; } // if status says fail, add count of fail
		
		else if(duration == 0 && strArray[3].equals("Success")) {abnorCount ++;} // if status says success but duration is 0, add count of abnormal
		
		}
		else // either it's a different jobcode or different month or different year, calculate STD and print out put data
		{
			ArrayList<Integer> cluster1 = new ArrayList<>(); // cluster1 stores the abnormally low run time
			
			ArrayList<Integer> cluster2 = new ArrayList<>(); // cluster2 stores the normal run time
			
			ArrayList<Integer> cluster3 = new ArrayList<>();// cluster3 stores the abnormally long run time
						
			double sum = 0.0;  int total; int abnorS = abnorCount, abnorL = 0; // abnormal small and large runtime
	        
	        total = numArray.size(); // get total success jobcode count by asking for total number in numArray
	        
	        jobMonthCount = total + failCount + abnorCount; // total count of job code each month is added by total success, count of fail and count of abnormal
	        
	        for(int i = 0; i<total; i++) { sum += numArray.get(i);   } // get add sum of duration

	        double mean = sum/total; // get average
	        
	        double  standardDeviation = 0.0; 
	        
	        for(int i = 0; i<total; i++){
	       
	            standardDeviation += Math.pow(numArray.get(i) - mean, 2);
	        }

	        double std =  Math.sqrt(standardDeviation/total); // get standard deviation
	        
	        if(total>10 && std > 10) { // if there are job codes that has less than 10 counts, or the initial STD is not bigger than 10, we don't apply to the cluster forming
	        
	        cluster1.add(numArray.get(0));// add the smallest data to cluster 1 as initial data
	        
	        cluster3.add(numArray.get(numArray.size()-1)); // add the largest data to cluster 3 as initial data
	        
	        double radius1  = cluster1.get(0)/10, radius2 = cluster3.get(0)/10; // setting the radius to be 10% of the initial cluster center 
	        		
	        double G_Center1 = cluster1.get(0), G_Center2 = cluster3.get(0);   // setting the initial center of gravity of the cluster using the first element in the cluster
	        
      	        
	        for(int e = 1; e< numArray.size(); e++) 
	        {  
	        	if(numArray.get(e) < G_Center1+radius1) //if the next element in the num array falls into the gravity+radius, it is added to cluster
	        	
	        	{G_Center1 = (G_Center1 + numArray.get(e))/2; radius1 = G_Center1/10;  cluster1.add(numArray.get(e));} // updated radius to be 10% of the center of gravity
	        	
	        	if(numArray.get(numArray.size()-(1+e)) > G_Center2-radius2)  //if the next element in the num array falls into the gravity - radius, it is added to cluster
	        	
	        	{G_Center2 = (G_Center2 + numArray.get(numArray.size()-(1+e)))/2; 
	        	
	        	radius2 = G_Center2/10;  cluster3.add(numArray.get(numArray.size()-(1+e)));} // updated radius to be 10% of the center of gravity
	        		        
	        }
	        
	        if(cluster1.size()+cluster3.size() < numArray.size()) { // if the cluster of either side is not the center cluster itself
	        
	        total = numArray.size()-cluster3.size(); sum = 0; // reset some variable for recalculation
	        
	        for(int i = cluster1.size(); i<total; i++) { sum += numArray.get(i);   } // get new sum of duration

	        mean = sum/total; // get new average

	        standardDeviation = 0.0; 
	        
	        for(int i = cluster1.size(); i<total; i++){
	       
	            standardDeviation += Math.pow(numArray.get(i) - mean, 2);
	        }

	        std =  Math.sqrt(standardDeviation/total); // get new standard deviation
	        
	        abnorS += cluster1.size() ; abnorL = cluster3.size();}
	        
	        }
	        
	       // abnorS = cluster1.size() + abnorCount; 
	        
	        abnorL = cluster3.size();
	        
	        String naCheck = "" + mean; // due to the fact that there exists job codes that have none successful run, resulting a Not a Number in mean and std calculation
	                                   // so we set up the following 2 NaN checkers and replace those mean and std to 0.
	        
	        if(naCheck.equals("NaN")) {mean = 0; naCheck = "" + std;}
	        
	        if(naCheck.equals("NaN")) {std = 0;}
	        
	        
	        String tempStr = keyCount + ", " + jobCode + ", " + month + "/" + year + ", " 
	        				 + mean + ", " + std + ", " + failCount + ", " + abnorS
	        				 + ", " + abnorL + ", " + jobMonthCount; // put all the outputs together
	        
	        toString.add(tempStr); keyCount ++;
	        
	        year = tempY; month = tempM; jobCode = jobCD; // restore all variable to default values in preparation to next calculation
	        
	        numArray.clear(); jobMonthCount = 0;  failCount = 0; abnorCount = 0;// restore all variable to default values in preparation to next calculation
	        
	        if(j!= inStr.size()-1) {j = j-1;} // array size over flow checker
	       
		}
		
		j++;}while(j<inStr.size()); // repeat all the above procedure till there's none
		
        
        try {
            PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("cluster_data_out.txt", true))); // create or replace the output txt file
            
            for(String printStr : toString ) {out.println(printStr);} // print all output to txt file
           
            out.close(); // close file
        } catch (IOException e) {
            //exception handling left as an exercise for the reader
        }
    }
}
