/* @ Author: APLOMB TR HUANG
 * @ Team: Anthem Tornado
 * @ Last Edit: 02/27/2019
 */

import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class data_cal {

	public static void main(String[] args) throws  FileNotFoundException {

		Scanner input = new Scanner(new File("cluster_data_out.txt")); // This is where the data from T-SQL database 
		
		ArrayList <String> inStr = new ArrayList<>(); // this array list stores the lines taken from txt file
		
		ArrayList <String> minOut = new ArrayList<>();
		
		ArrayList <String> avgOut = new ArrayList<>();
		
		ArrayList <String> maxOut = new ArrayList<>();
		
		maxOut.add(" {\"name\": \"Max\", \"series\": [ ");
		
		avgOut.add(" {\"name\": \"Average\", \"series\": [ ");
		
		minOut.add(" {\"name\": \"Min\", \"series\": [ ");
		
		ArrayList <String> toString = new ArrayList<>(); // this array list will store out put after process and prep for print
	
		while(input.hasNextLine()) {inStr.add(input.nextLine());} //read all the lines from txt file and store in inStr array
		
		input.close(); // close file
		
        String tempJbCd = "MAINT01"; // job code data is in the second part

		int j = 0; //double stdMulti = 1.5; // std multiplier variable
		
		int	jobCount =0, // counting a monthly job code count for each job code
				
			failCount = 0, // counting job code which status is fail
				
			abnorCount = 0; // counting job code which duration is 0 but status says success (which is abnormal)
		
		do {
			String str = inStr.get(j); // getting each line from inStr
            
            double mean = 0.0;
		
            double std = 0.0;
		
            int fail = 0;
            
            int low = 0;
		
            int high = 0; 
            
            int count = 0;
            
            str = inStr.get(j); // getting the first string
    		
            String[] strArray= new String[9]; // separating each line in 9 parts
            
    		strArray = str.split(", ");
    		
    		String jobCode = strArray[1];
    		
    		fail = Integer.parseInt(strArray[5]);
			
			low = Integer.parseInt(strArray[6]);
					
		    high = Integer.parseInt(strArray[7]);
		    
		    count = Integer.parseInt(strArray[8]);
            
    		failCount += fail; 
    		
    		abnorCount += (low + high);
			
			jobCount += count;
		
		if (jobCode.equals("MAINT01") && j < inStr.size()-1) // if the next job code is equal to the current, next month, year is the same as current 
		{ 
			String date = strArray[2]; String month = "";
			
			if(date.substring(0,2).equals("10")) {month = "Oct";}
			
			else if(date.substring(0,2).equals("11")) {month = "Nov";}
			
			else if(date.substring(0,2).equals("12")) {month = "Dec";}
			
			else if(date.substring(0,1).equals("1")) {month = "Jan";}
			
			else if(date.substring(0,1).equals("2")) {month = "Feb";}
			
			else if(date.substring(0,1).equals("3")) {month = "Mar";}
			
			else if(date.substring(0,1).equals("4")) {month = "Apr";}
			
			else if(date.substring(0,1).equals("5")) {month = "May";}
			
			else if(date.substring(0,1).equals("6")) {month = "Jun";}
			
			else if(date.substring(0,1).equals("7")) {month = "Jul";}
			
			else if(date.substring(0,1).equals("8")) {month = "Aug";}
			
			else if(date.substring(0,1).equals("9")) {month = "Sep";}
							
			String format = "";
		
			mean = Double.parseDouble(strArray[3]);
			
			std = Double.parseDouble(strArray[4]);
						
			double min = mean - std; double max = mean + std;
						
			format = "{\"value\": " +  max + ", \"name\": \"" + date.substring(date.length()-2)+ "-" + month + "\" },";
			
			maxOut.add(format);
			
			format = "{\"value\": " +  mean + ", \"name\": \"" + date.substring(date.length()-2)+ "-" + month + "\" },";
			
			avgOut.add( format );
			
			format = "{\"value\": " +  min + ", \"name\": \"" + date.substring(date.length()-2)+ "-" + month + "\" },";
			
			minOut.add( format );
			
		
		}
		else // either it's a different jobcode or different month or different year, calculate STD and print out put data
		{
			if(tempJbCd.equals("MAINT01")) 
			{
			maxOut.add(" ] }, ");
			
			avgOut.add(" ] }, ");
			
			minOut.add(" ] }, ");
			}
	        
			tempJbCd = jobCode;
		}
		
		j++;}while(j<inStr.size()); // repeat all the above procedure till there's none
		
        
        try {
            PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter("stat_data_out.txt", true))); // create or replace the output txt file
            
            for(String printStr : maxOut ) {out.println(printStr);}
            
            for(String printStr : avgOut ) {out.println(printStr);}
            
            for(String printStr : minOut ) {out.println(printStr);}
            
            out.println("\n\n");
            
            String tempStr = "total fail count: " + failCount + 
    				"; total abnormal count: " + abnorCount + 
    				"; total job count: " + jobCount; 
    				 
            out.println(tempStr); // print all output to txt file
           
            out.close(); // close file
        } catch (IOException e) {
            //exception handling left as an exercise for the reader
        }
    }
    
}
