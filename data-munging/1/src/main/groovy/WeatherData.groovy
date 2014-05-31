/*
 * This Groovy source file was auto generated by running 'gradle buildInit --type groovy-library'
 * by 'mcornell' at '5/17/14 11:04 AM' with Gradle 1.12
 *
 * @author mcornell, @date 5/17/14 11:04 AM
 */
class WeatherDataParser {
    WeatherData parseLine(String line) {
        def result 

        def splitted = line.split()
        if (splitted.size() > 0 && splitted[0].isInteger()) {
            result = new WeatherData()
            result.with {
            	day = convertColumnToInteger(splitted[0])
            	maxTemp = convertColumnToInteger(splitted[1])
            	minTemp = convertColumnToInteger(splitted[2])
            	avgTemp = convertColumnToInteger(splitted[3])
            }
            result.spread = result.maxTemp - result.minTemp
        }
        result
    }

    Integer convertColumnToInteger(String column) {
    	column.collectReplacements { str -> str == '*' ? '' : null } as Integer
    }

    List<WeatherData> readData(def dataFile) {
        def data = []
        dataFile.eachLine {
            def day = parseLine(it)
            if (day) {
                data << day
            }
        }
        data
    }

    WeatherData findLargestSpread(def dataFile) {
        def sortedBySpread = readData(dataFile).sort { a, b -> b.spread <=> a.spread }

        def largestSpread = sortedBySpread[0]
        println "Day: ${largestSpread.day} had the largest temperature spread of ${largestSpread.spread} degrees"
        largestSpread
    }
}

class WeatherData {
	Integer day
	Integer minTemp
	Integer maxTemp
	Integer avgTemp
    Integer spread
}
