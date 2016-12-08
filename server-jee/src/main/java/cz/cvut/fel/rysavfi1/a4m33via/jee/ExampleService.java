package cz.cvut.fel.rysavfi1.a4m33via.jee;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.text.SimpleDateFormat;
import java.util.Date;

@Path("/")
public class ExampleService {

    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("dd.mm.yyyy");

    private static final SimpleDateFormat TIME_FORMAT = new SimpleDateFormat("HH.MM.ss");

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/")
    public String helloWorld() {
        return "Hello World!";
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/date")
    public DateTimeDTO date() {
        Date currentDate = new Date(System.currentTimeMillis());
        DateTimeDTO dateTimeDTO = new DateTimeDTO();
        dateTimeDTO.setDate(DATE_FORMAT.format(currentDate));
        return dateTimeDTO;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/time")
    public DateTimeDTO time() {
        Date currentDate = new Date(System.currentTimeMillis());
        DateTimeDTO dateTimeDTO = new DateTimeDTO();
        dateTimeDTO.setTime(TIME_FORMAT.format(currentDate));
        return dateTimeDTO;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/dateTime")
    public DateTimeDTO dateTime() {
        Date currentDate = new Date(System.currentTimeMillis());
        DateTimeDTO dateTimeDTO = new DateTimeDTO();
        dateTimeDTO.setDate(DATE_FORMAT.format(currentDate));
        dateTimeDTO.setTime(TIME_FORMAT.format(currentDate));
        return dateTimeDTO;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/echo")
    public String echo(EchoDTO echoDTO) {
        return "Message \"" + echoDTO.getMessage() + "\" from " + echoDTO.getAuthor() + "!";
    }

}
